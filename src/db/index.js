"use server";

import mongoose from "mongoose";

let connection = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  try {
    
    if (!process.env.MONGODB_URI) throw new Error("Url is missing");
    if (connection) return;

    const database = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Portfolio",
    });
    connection = database.connections[0].readyState === 1;
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
