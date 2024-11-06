import Redis from "ioredis";

const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
    db: process.env.REDIS_DB,
});

// Menangani error koneksi untuk memastikan Redis terhubung
redis.on("error", (err) => {
    console.error("Failed to connect to Redis:", err);
});

export default redis;