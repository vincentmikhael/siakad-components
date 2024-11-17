import {v7 as uuidv7} from "uuid";
import {cookies} from "next/headers";
import {setSession, getSession} from "@/libs/redisHelper";

export async function POST(req) {
    const userData = await req.json();
    const url = new URL(req.url);
    const existingSessionId = url.searchParams.get("s_id");
    // Pastikan data yang diterima benar
    if (!userData || !userData.data || !userData.data.id) {
        return new Response(JSON.stringify({error: "Invalid user data"}), {
            status: 400,
            headers: {"Content-Type": "application/json"},
        });
    }
    try {
        let sessionId = existingSessionId;
        const existingSession = await getSession(sessionId);
        let cookieHeader = ""

        if (sessionId && existingSession) {
            await setSession(sessionId, userData);
        } else {
            sessionId = uuidv7();
            await setSession(sessionId, userData);
            cookieHeader = cookies().set("s_id", sessionId, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 60 * 60 * 24, // 1 hari
                path: "/",
            });
        }

        // Respons dengan status sukses dan set-cookie di header
        return new Response(
            JSON.stringify({message: "Tokens saved successfully"}),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Set-Cookie": cookieHeader,
                },
            }
        );
    } catch (error) {
        return new Response(JSON.stringify({error: "Failed to save tokens"}), {
            status: 500,
            headers: {"Content-Type": "application/json"},
        });
    }
}
