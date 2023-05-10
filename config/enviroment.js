import { config } from "dotenv";

config();

export const mongoConnection = process.env.CONNECTION_STRING_MONGO;
export const port = process.env.PORT;
