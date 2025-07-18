import dotenv from "dotenv";
import { createClient } from "redis";

dotenv.config();


// Create Redis client for OTP operations without immediately connecting
export const redisClient: any = createClient({
    url: process.env.REDIS_ENDPOINT
});

// Connection management functions for redisOMClient (sessions)
export const connectRedis = async () => {
    try {
        if (!redisClient.isOpen) {
            await redisClient.connect();
        }
        return redisClient;
    } catch (error) {
        console.error("Redis session connection failed:", error);
        throw error;
    }
};

export const disconnectRedis = async () => {
    try {
        if (redisClient.isOpen) {
            await redisClient.quit();
        }
    } catch (error) {
        console.error("Redis session disconnection failed:", error);
    }
};
