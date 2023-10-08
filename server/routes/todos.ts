import { Router, Request, Response } from "express";
import IResponse from "../types/IResponse";
import Todo from "../types/Todo";

type TodoResponse = Todo | Todo[];

const router: Router = Router();

interface ITodoParams {
  id: number;
}

router.get("/", (req: Request, res: Response<IResponse<TodoResponse>>) => {
  res.send({ success: true, data: [] });
});

router.get("/:id", (req: Request<ITodoParams>, res: Response) => {
  const { id }: ITodoParams = req.params;

  res.json({ message: "todos", id });
});

router.post("/", (req: Request, res: Response) => {
  res.send({ message: "todos" });
});

router.put("/:id", (req: Request<ITodoParams>, res: Response) => {
  res.send({ message: "todos" });
});

router.delete("/:id", (req: Request<ITodoParams>, res: Response) => {
  res.send({ message: "todos" });
});

export default router;
