import express from "express";
import formidable from "express-formidable";
import {
  createProductController,
  getProductController,
  getSingleProductController,
  photoProductController,
  deletePhotoProductController,
  updateProductController,
  productFilterController,
  productCountController,
  productListController,
  searchProductController,
  relatedProductController,
  braintreeTokenController,
  braintreePaymentController,
} from "../Controller/productController.js";
import { isAdmin, requireSignIn } from "../Middlewares/authMiddleware.js";

const ProductRouter = express.Router();

//create route
ProductRouter.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//update route
ProductRouter.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get all product route
ProductRouter.get("/get-allproducts", getProductController);

// get single product route
ProductRouter.get("/single-product/:slug", getSingleProductController);

//get photo
ProductRouter.get("/product-photo/:pid", photoProductController);

// delete photo (some how working ,i have made this route to delete the photo but it deletes the entire  individual dataset)
ProductRouter.delete("/deleteproduct-photo/:pid", deletePhotoProductController);

//filter product
ProductRouter.post("/filter-product", productFilterController);

// get total no of products
ProductRouter.get("/product-count", productCountController);

// product list page
ProductRouter.get("/product-list/:page", productListController);
//search products
ProductRouter.get("/search/:keyword", searchProductController);
//similar products
ProductRouter.get("/related-product/:pid/:cid", relatedProductController);
// brain tree token
ProductRouter.get("/braintree/token", braintreeTokenController);
//payment route
ProductRouter.post(
  "/braintree/payment",
  requireSignIn,
  braintreePaymentController
);

export default ProductRouter;
