import redis from "@/libs/redis";

// Helper untuk menyimpan sesi di Redis
export async function setSession(sessionId, userData, ttl = 7200) {
  if (!userData || !userData.data || !userData.data.id) {
    console.log("error:Invalid user data");
    return false;
  }
  try {
    const key = `itn_global_session_${sessionId}`;
    const value = JSON.stringify(userData);
    await redis.set(key, value, "EX", ttl); // EX digunakan untuk menetapkan waktu kedaluwarsa (TTL) dalam detik
    return true;
  } catch (error) {
    console.error("Error setting session in Redis:", error);
    return false;
  }
}

// Helper untuk mengambil sesi dari Redis
export async function getSession(sessionId) {
  try {
    const key = `itn_global_session_${sessionId}`;
    const data = await redis.get(key);
    return data ? data : null;
  } catch (error) {
    console.error("Error getting session from Redis:", error);
    return null;
  }
}

// Helper untuk menghapus sesi dari Redis
export async function delSession(sessionId) {
  try {
    const key = `itn_global_session_${sessionId}`;
    const data = await redis.del(key);
    return data ? data : null;
  } catch (error) {
    console.error("Error deleting session from Redis:", error);
    return null;
  }
}
