import { getSession } from "@/libs/redisHelper";


export async function GET(req) {
  // Ambil session id dari parameter query atau header
  const url = new URL(req.url);
  const sessionId = url.searchParams.get("s_id");

  if (!sessionId) {
    return new Response(JSON.stringify({ error: "Session ID is required" }), {
      status: 400,
    });
  }

  try {
    const userSession = await getSession(sessionId);
    if (!userSession) {
      return new Response(JSON.stringify({ error: "Token not found" }), {
        status: 404,
      });
    }
    return new Response(userSession, { status: 200 });
  } catch (error) {
    console.error("Error fetching token from Redis:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch token" }), {
      status: 500,
    });
  }
}
