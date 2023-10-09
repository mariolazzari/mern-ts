import { connect } from "mongoose";

const connectDB = async (uri: string = "") => {
  try {
    if (!uri) {
      throw new Error("Missing connection string");
    }

    await connect(uri);
    console.log("MongoDB connected");
  } catch (ex) {
    if (ex instanceof Error) {
      return console.error("MongoDB connection error:", ex.message);
    }
    console.log("MongoDB connection error", JSON.stringify(ex));
  }
};

export default connectDB;
