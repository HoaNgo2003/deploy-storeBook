import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database";
import categoryRouter from "./routes/category";
import productRouter from "./routes/product";
import uploadRouter from "./routes/upload";
import userRouter from "./routes/user";
import cartRouter from "./routes/cart";
import orderRouter from "./routes/order";
import ChuyenMuc from "./routes/ChuyenMuc";
const serverless = require('serverless-http');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Conect to MongoDB
connectDB(process.env.MONGODB_URL)

// middleware
app.use("/.netlify/functions/api/categories", categoryRouter)
app.use("/.netlify/functions/api/chuyenmuc",ChuyenMuc)
app.use("/.netlify/functions/api/products", productRouter)
app.use("/.netlify/functions/api/images", uploadRouter);
app.use("/.netlify/functions/api", userRouter);
app.use("/.netlify/functions/api/carts", cartRouter);
app.use("/.netlify/functions/api/orders", orderRouter);
module.exports.handler = serverless(app);
export const viteNodeApp = app;
