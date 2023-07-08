import express from "express";
import formidable from "express-formidable";
import {
  SignUpController,
  LoginController,
  testController,
  profileController,
  forgetPasswordController,
  AdminController,
  getAllUsers,
  updateProfileController,
  userPhototController,
  getSingleUserController,
  getOrdersController,
  getAllOrdersController,
  OrdersStatusController
} from "../Controller/authController.js";
import { requireSignIn, isAdmin } from "../Middlewares/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/signup", formidable(), SignUpController);
authRouter.get("/userphoto/:uid", userPhototController);

authRouter.route("/login").post(LoginController);

authRouter.get("/test", requireSignIn, isAdmin, testController);
authRouter.get("/getsingleuser", requireSignIn, getSingleUserController);
authRouter.get("/getalluser", requireSignIn, isAdmin, getAllUsers);

authRouter.get("/user-auth", requireSignIn, profileController);
authRouter.get("/admin-auth", requireSignIn, isAdmin, AdminController);

authRouter.route("/forgetpassword").post(forgetPasswordController);
authRouter.put("/update-profile", requireSignIn, updateProfileController);
authRouter.get("/orders", requireSignIn, getOrdersController);
authRouter.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);
authRouter.put(
  "/orders-status/:orderId",
  requireSignIn,
  isAdmin,
  OrdersStatusController
);

export default authRouter;
