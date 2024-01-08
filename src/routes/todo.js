import express from "express";
import {
  getAllTodo,
  getTodoById,
  createTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todoController";
import { Authorization } from "../middlware/Authorization";

const todoRouter = express.Router();

// todoRouter.route("/").get(getAllTodo).post(Authorization, createTodo);
todoRouter.route("/").get(getAllTodo).post(createTodo);

todoRouter.route("/:id").get(getTodoById).patch(updateTodo).delete(deleteTodo);

export default todoRouter;
