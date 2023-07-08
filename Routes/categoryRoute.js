 import express from "express";
import {  requireSignIn,isAdmin } from "../Middlewares/authMiddleware.js"
import { CreateCategoryController , UpdateCategoryController ,getCategoryController,singleCategoryController,deleteCategoryController } from "../Controller/categoryController.js";

const CategoryRouter = express.Router()



CategoryRouter.post('/create-category',requireSignIn ,isAdmin ,  CreateCategoryController)
CategoryRouter.put('/update-category/:id',requireSignIn ,isAdmin ,  UpdateCategoryController)
CategoryRouter.get('/get-category' ,  getCategoryController)
CategoryRouter.get('/single-category/:slug' ,  singleCategoryController)
CategoryRouter.delete('/delete-category/:id',requireSignIn ,isAdmin ,  deleteCategoryController)






export default CategoryRouter;