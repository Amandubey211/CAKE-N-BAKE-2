import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import path from "path"
import authRouter from "./Routes/authRoute.js";
import ProductRouter from "./Routes/productRoute.js";
import CategoryRouter from "./Routes/categoryRoute.js";

import DBconnect from "./DB.js";
import feedbackRouter from "./Routes/feedbackRoute.js";
const app = express();

config({ path: "./config/config.env" });


//middlewares
app.use(express.static(path.join(__dirname,"./client/build")))
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// user routes
app.use("/api/auth", authRouter);
app.use("/api/user", feedbackRouter);

//admin routes
app.use("/api/admin/product", ProductRouter);


app.use("/api/admin/category", CategoryRouter);

//database connection
DBconnect();

app.use("*",function(req,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"))
})

app.listen(process.env.PORT, () => {
  console.log(`server is running!!! ${process.env.PORT}`);
});
