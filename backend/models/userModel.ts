import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    githubData: { type: Object, required: true },
    isDeleted: { type: Boolean, default: false },
    friends: [{ type: String }],
});

export const User = mongoose.model("User", userSchema);
