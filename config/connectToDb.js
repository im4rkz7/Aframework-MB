import mongoose from "mongoose";
import { mongoConnection } from "./enviroment.js";

let isConnected;

export const connectToDb = async () => {
  if (!isConnected) {
    try {
      await mongoose.connect(mongoConnection);
    } catch (e) {
      console.log(`Error al acceder a la base de datos. ${e.message}`);
    }
  }

  return;
};
