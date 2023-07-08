import mongoose from "mongoose";
import * as EmailValidator from "email-validator";

const UserSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      maxLength: 20,
      required: true,
      trim: true,
    },
    address: {
      type: {},
      maxLength: 50,
      required: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      maxLength: 10,
      unique: true,
    },
    userPhoto: {
      data: Buffer,
      contentType: String,
    },
    answer: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
      validate: [
        function () {
          return EmailValidator.validate(this.email);
        },
        () => {
          console.log("please enter valid email");
        },
      ],
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    ROLE: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("UserModel", UserSchema);

export default UserModel;
