import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { response } from "express";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("connected to database!")); // establish the connection with db

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "hello" });
});

app.listen(7000, () => {
  console.log("server started on localhost:7000 ");
});
