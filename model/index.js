import mongoose, { model } from "mongoose";

const { Schema } = mongoose;

const usersSchema = new Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
});

export const User = model("User", usersSchema);
