import express from "express";
import { feedbackController } from "../Controller/feedbackController.js";
import { requireSignIn } from "../Middlewares/authMiddleware.js";


const feedbackRouter = express.Router()

feedbackRouter.post("/feedback/:id", requireSignIn,feedbackController)

export default feedbackRouter;