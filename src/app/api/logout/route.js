import {cookies} from "next/headers";
import {delSession} from "@/libs/redisHelper";

export async function POST(req) {
    const cookieStore = await cookies()
    const sessionId = cookieStore.get("s_id").value;
    if (!sessionId) {
        return new Response(JSON.stringify({error: "Session ID is required"}), {
            status: 400,
        });
    }

    try {
        await delSession(sessionId);
        cookieStore.delete("s_id")
        return new Response(
            JSON.stringify({message: "Session deleted successfully"}),
            {
                status: 200,
                headers: {"Content-Type": "application/json"},
            }
        );
    } catch (error) {
        console.error("Error deleting session from Redis:", error);
        return new Response(JSON.stringify({error: "Failed to delete session"}), {
            status: 500,
            headers: {"Content-Type": "application/json"},
        });
    }
}