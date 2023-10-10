import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import authRouter from "./Routes/authRoute.js";
import ProductRouter from "./Routes/productRoute.js";
import CategoryRouter from "./Routes/categoryRoute.js";
import { fileURLToPath } from "url";
import DBconnect from "./DB.js";
import feedbackRouter from "./Routes/feedbackRoute.js";
const app = express();

config({ path: "./config/config.env" });

//database connection
DBconnect();


//middlewares
//esmodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//middlewares
app.use(express.static(path.join(__dirname, "./Client/build")));

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

// user routes
app.use("/api/auth", authRouter);
app.use("/api/user", feedbackRouter);

//admin routes
app.use("/api/admin/product", ProductRouter);
// app.use("/api/admin", feedbackRouter);

app.use("/api/admin/category", CategoryRouter);

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./Client/build/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`server connection successfull.`);
});
