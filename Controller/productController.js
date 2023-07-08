import ProductModel from "../Models/ProductModel.js";
import fs from "fs";
import slugify from "slugify";
import braintree from "braintree";
// import { config } from "dotenv";
import OrderModel from "../Models/OrderModel.js";
import dotenv from "dotenv";

// config({ path: "./config/config.env" });
dotenv.config();

// payment gateway
var gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.MERCHANT_ID,
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
});

//create product
export const createProductController = async (req, res) => {
  try {
    const { productName, description, category, quantity, price, shipping } =
      req.fields;
    const { photo } = req.files;
    switch (true) {
      case !productName:
        return res.status(200).send({ error: "productName required" });

      case !description:
        return res.status(200).send({ error: "description required" });
      case !quantity:
        return res.status(200).send({ error: "quantity required" });

      case !category:
        return res.status(200).send({ error: "category required" });

      case !price:
        return res.status(200).send({ error: "Price required" });

      case !shipping:
        return res.status(200).send({ error: "shipping required" });

      case !photo:
        return res
          .status(200)
          .send({ error: "photo required and should be smaller than 15MB " });
    }
    const products = new ProductModel({
      ...req.fields,
      slug: slugify(productName),
    });
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }

    await products.save();
    res.status(200).send({
      success: true,
      message: "product created succesfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error occured while creating the product!! ",
      error,
    });
  }
};

// get all product
export const getProductController = async (req, res) => {
  try {
    const product = await ProductModel.find({})
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      totalCount: product.length,
      message: "All product fetched successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error!!  in geetting product",
      error: error.message,
      success: false,
    });
  }
};

//get single product
export const getSingleProductController = async (req, res) => {
  try {
    const product = await ProductModel.findOne({ slug: req.params.slug })
      .select("-photo")
      .populate("category");

    res.status(200).send({
      success: true,
      message: "Single product fetched successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting the product",
      error: error.message,
    });
  }
};

//save product photo
export const photoProductController = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.pid).select("photo");

    if (product.photo.data) {
      res.set("Content-type", product.photo.contentType);
      return res.status(200).send(product.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while  fetching photo ",
      error: error.message,
    });
  }
};

//delete product
export const deletePhotoProductController = async (req, res) => {
  try {
    const product = await ProductModel.findByIdAndDelete(req.params.pid).select(
      "photo"
    );
    if (product) {
      res.status(200).send({
        success: true,
        message: "Product deleted successfully",
        productDeleted: product,
      });
    } else {
      return res.status(500).send({
        success: true,
        message: "Product not  deleted",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting the product-photo",
      error: error.message,
    });
  }
};

//update product
export const updateProductController = async (req, res) => {
  try {
    const { productName, description, category, quantity, price, shipping } =
      req.fields;
    const { photo } = req.files;

    const products = await ProductModel.findByIdAndUpdate(req.params.pid, {
      ...req.fields,
      slug: slugify(productName),
    });
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }

    await products.save();
    res.status(200).send({
      success: true,
      message: "Product updated succesfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error occured while updating the product!! ",
      error: error,
    });
  }
};

export const productFilterController = async (req, res) => {
  try {
    const { checked, radio } = req.body;

    let args = {};
    if (checked.length > 0) args.category = checked;

    if (radio.length) args.price = { $gte: radio[0], $lte: radio[1] };
    const products = await ProductModel.find(args);

    res
      .status(200)
      .send({ success: true, message: "product filtered ", products });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "error occured while filtering the product",
      error,
    });
  }
};

export const productCountController = async (req, res) => {
  try {
    const totalcount = await ProductModel.find({}).estimatedDocumentCount();
    res.status(200).send({ success: true, totalcount });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: true,
      message: "error occured while counting the product",
      error,
    });
  }
};

export const productListController = async (req, res) => {
  try {
    const perPage = 6;
    const page = req.params.page ? req.params.page : 1;
    const products = await ProductModel.find({})
      .select("-photo")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      products,
      message: "product fetched succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      message: "error occured while counting the product",
      error,
    });
  }
};

export const searchProductController = async (req, res) => {
  try {
    const { keyword } = req.params;
    const result = await ProductModel.find({
      $or: [
        { productName: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    }).select("-photo");
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "error occured while searching the product",
      error,
    });
  }
};

export const relatedProductController = async (req, res) => {
  try {
    const { pid, cid } = req.params;
    const products = await ProductModel.find({
      category: cid,
      _id: { $ne: pid },
    })
      .select("-photo")
      .limit(3)
      .populate("category");
    res.status(200).send({ success: true, products });
  } catch (error) {
    console.log(error);
    res.status(400).send({ success: false, message: error.message, error });
  }
};

//payment gateway api token
export const braintreeTokenController = async (req, res) => {
  try {
    gateway.clientToken.generate({}, function (err, response) {
      if (err) {
        res
          .status(500)
          .send({ success: false, message: "token unsuccessfull ", err });
      } else {
        res.send(response);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "cannot get token" + error.message,
      error,
    });
  }
};

//payments
export const braintreePaymentController = async (req, res) => {
  try {
    const { nonce, cart } = req.body;
    let total = 0;
    cart.map((i) => {
      total += i.price;
    });
    let newTransaction = gateway.transaction.sale(
      {
        amount: total,
        paymentMethodNonce: nonce.nonce,
        options: {
          submitForSettlement: true,
        },
      },
      function (error, result) {
        if (result) {
          const order = new OrderModel({
            products: cart,
            payment: result,
            buyer: req.user._id,
            amount: total,
          }).save();
          res.json({ Ok: true });
        } else {
          console.log(error);
          res
            .status(500)
            .send({ success: false, message: "order not generated", error });
        }
      }
    );
  } catch (error) {
    console.log("backend:");
    console.log(error);
  }
};
