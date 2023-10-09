import express from "express";
import todosRouter from "./routes/todos";
import dotenv from "dotenv";
import connectDB from "./mongo";

dotenv.config();
const { MONGO_URI } = process.env;

connectDB(MONGO_URI);

const app = express();
app.use("/todos", todosRouter);

app.listen(3001, () => console.log("Express started on port 3001"));
