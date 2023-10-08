import express from "express";
import todosRouter from "./routes/todos";

const app = express();

app.use("/todos", todosRouter);

app.listen(3001, () => console.log("Express started on port 3001"));
