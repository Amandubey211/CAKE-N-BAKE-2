import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "products",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "UserModel",
    },
    amount: {
      type: Number,
    },
    status: {
      type: String,
      default: "NOT process",
      enum: ["NOT process", "processing", "Shipped", "deliver", "cancel"],
    },
  },
  { timeStamps: true }
);

export default mongoose.model("Order", OrderSchema);
