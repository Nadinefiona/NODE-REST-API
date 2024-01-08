import express from "express";
import cors from "cors";
import morgan from "morgan";
import todoRouter from "./routes/todo";
import userRouter from "./routes/user";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/v1/todo", todoRouter);
app.use("/api/v1/user", userRouter);
app.use("/" ,(req,res)=>{
    res.status(200).json({
        message:"Welcome to Todo app API"
    })
})

export default app;
