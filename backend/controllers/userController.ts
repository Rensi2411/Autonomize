import { Request, Response } from "express";
import { User } from "../models/userModel";
import { fetchGitHubUser } from "../utils/githubApi";

// Add other handlers as per requirements...

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await User.find().sort(req.query.sortBy || "createdAt");
    res.status(200).json(users);
};
