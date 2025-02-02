import axios from "axios";
import {getCookie} from "@libs/cookies";

const AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SIAKAD_BASE_URL,
});

// Menambahkan request interceptor
AxiosInstance.interceptors.request.use(
    async (config) => {
        try {
            const {value: sessionId} = await getCookie("s_id");
            const checkTokenResponse = await axios.get(`/api/get-session?s_id=${sessionId}`);
            if (checkTokenResponse.status === 404) {
                throw new Error("Token not found in Redis");
            }

            const {accessToken} = await checkTokenResponse.data;
            config.headers.Authorization = `Bearer ${accessToken}`;
            return config;

        } catch (error) {
            console.error("Error checking token in Redis:", error);
            return Promise.reject({...error, redirect: `${process.env.NEXT_PUBLIC_MYITN_BASE_URL}/login`});
        }
    },
    (error) => Promise.reject(error)
);

// Menambahkan response interceptor
AxiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Jika respons 403 (forbidden) dan belum di-retry, coba refresh token
        if (error.response?.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true; // Menandai agar tidak terjadi loop

            try {
                const {value: sessionId} = await getCookie("s_id");
                const checkTokenResponse = await axios.get(`/api/get-session?s_id=${sessionId}`);
                if (checkTokenResponse.status === 404) {
                    throw new Error("Token not found in Redis");
                }

                const {data, refreshToken} = await checkTokenResponse.data;

                // Permintaan untuk refresh token
                const refreshResponse = await axios.post(
                    `${process.env.NEXT_PUBLIC_SIAKAD_BASE_URL}/auth/refresh-token`,
                    {refreshToken}
                );

                const {accessToken: newAccessToken, refreshToken: newRefreshToken} = refreshResponse.data;

                await axios.post(`/api/set-session?s_id=${sessionId}`, {
                    data,
                    accessToken: newAccessToken,
                    refreshToken: newRefreshToken
                });
                console.log('run axiosinstance', sessionId)

                // Set header Authorization dengan token baru
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                // Lakukan ulang request original dengan token baru
                return axios(originalRequest);

            } catch (refreshError) {
                console.error("Refresh token error:", refreshError);
                return Promise.reject({...refreshError, redirect: `${process.env.NEXT_PUBLIC_MYITN_BASE_URL}/login`});
            }
        }
        return Promise.reject(error);
    }
);

export default AxiosInstance;