import {cookies} from "next/headers";
import {checkSession} from "@libs/authHelper";

export default async function getKonsentrasiListInit() {
    try {
        const sessionId = cookies().get("s_id")?.value;
        if (!sessionId) {
            throw new Error("Session ID is not found in cookies");
        }

        const accessToken = await checkSession(sessionId);

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_SIAKAD_BASE_URL}/konsentrasi/list/init`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                next: {revalidate: 86400},
            }
        );

        if (response.status === 404) throw new Error("Data not found");

        const listInit = await response.json();
        return listInit.data;
    } catch (error) {
        console.error("Failed to get data fakultas:", error);
    }
}
