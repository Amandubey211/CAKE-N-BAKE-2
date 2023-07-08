import mongoose from "mongoose";
import * as EmailValidator from "email-validator";

const FeedBackSchema = mongoose.Schema(
  {
    username: {
      type: String,
      maxLength: 20,
      required: true,
      trim: true,
    },

    phone: {
      type: Number,
      unique: false,
    },
    userId: {
      type: String,
    },

    email: {
      type: String,
      required: true,
      validate: [
        function () {
          return EmailValidator.validate(this.email);
        },
        () => {
          console.log("please enter valid email");
          alert("please enter valid email");
        },
      ],
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const FeedBackModel = mongoose.model("feedbacks", FeedBackSchema);

export default FeedBackModel;
