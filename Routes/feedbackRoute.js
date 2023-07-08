import express from "express";
import { feedbackController,getAllFeedbackController } from "../Controller/feedbackController.js";
import { isAdmin, requireSignIn } from "../Middlewares/authMiddleware.js";


const feedbackRouter = express.Router()

//save feedback
feedbackRouter.post("/feedback/:id", requireSignIn,feedbackController)

//get all feedback
feedbackRouter.get("/allfeedback", requireSignIn,isAdmin,getAllFeedbackController)


export default feedbackRouter;