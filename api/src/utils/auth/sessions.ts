import type { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
import { redisClient } from "./redis.ts"; 

dotenv.config();

export const handleCreateSession = async (name: string, email: string, role: string, res: Response) => {
  try {
    const sid = uuidv4();
    const sessionData = JSON.stringify({ name, email, role });

    await redisClient.set(`session:${sid}`, sessionData, {
      EX: 60 * 60 * 24, 
    });

    res.cookie("session-id", sid, {
      httpOnly: true,
      domain: process.env.DOMAIN,
      secure: true,
      sameSite: "none",
    });
  } catch (error) {
    console.error("Error creating session:", error);
    throw error;
  }
};

export const handleGetSession = async (req: Request) => {
  try {
    const sid = req.cookies["session-id"];
    if (!sid) return null;

    const sessionData = await redisClient.get(`session:${sid}`);
    return sessionData ? JSON.parse(sessionData) : null;
  } catch (error) {
    console.error("Error fetching session:", error);
    throw error;
  }
};

export const handleDestroySession = async (req: Request, res: Response) => {
  try {
    const sid = req.cookies["session-id"];
    if (sid) {
      await redisClient.del(`session:${sid}`);
    }
    res.clearCookie("session-id");
  } catch (error) {
    console.error("Error destroying session:", error);
    throw error;
  }
};
