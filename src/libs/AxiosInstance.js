'use server'

import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SIAKAD_BASE_URL,
});

// Menambahkan request interceptor
AxiosInstance.interceptors.request.use(
    async (config) => {
        try {
            const checkTokenResponse = await axios.get("/api/get-session");
            if (checkTokenResponse.status === 404) {
                throw new Error("Token not found in Redis");
            }

            const { accessToken } = await checkTokenResponse.json();
            config.headers.Authorization = `Bearer ${accessToken}`;
            return config;

        } catch (error) {
            console.error("Error checking token in Redis:", error);
            return Promise.reject({ ...error, redirect: "/login" });
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
                const checkTokenResponse = await axios.get("/api/get-session");
                if (checkTokenResponse.status === 404) {
                    throw new Error("Token not found in Redis");
                }

                const { data, refreshToken } = await checkTokenResponse.json();

                // Permintaan untuk refresh token
                const refreshResponse = await axios.post(
                    `${process.env.NEXT_PUBLIC_SIAKAD_BASE_URL}/auth/refresh-token`,
                    { refreshToken }
                );

                const { accessToken: newAccessToken, refreshToken: newRefreshToken } = refreshResponse.data;

                await axios.post("/api/set-session", { data, accessToken: newAccessToken, refreshToken: newRefreshToken });

                // Set header Authorization dengan token baru
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                // Lakukan ulang request original dengan token baru
                return axios(originalRequest);

            } catch (refreshError) {
                console.error("Refresh token error:", refreshError);
                return Promise.reject({ ...refreshError, redirect: "/login" });
            }
        }
        return Promise.reject(error);
    }
);

export default AxiosInstance;