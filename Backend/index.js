import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
