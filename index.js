import express from "express";
import { connectDB } from "@/config/db";
import userRouter from "@/routes/user";

connectDB();

const app = express();

app.use("/api/users", userRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000...");
});
