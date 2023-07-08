import UserModel from "../Models/UserModel.js";
import jwt from "jsonwebtoken";
import fs from "fs";
import { config } from "dotenv";
import { sendMail } from "../Utils/NodeMailer.js";

config({ path: "./config/config.env" });
// const JWT_secret_Key = process.env.JWT_secret_Key;
const JWT_secret_Key = "dubaduba";

import { hashPassword, comparePassword } from "../Utils/authHelper.js";
import OrderModel from "../Models/OrderModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    if (!users) {
      return res.status(500).send({
        success: false,
        message: "Can't access the data ",
      });
    }
    res.status(200).send({
      success: true,
      message: "All user fetched successfully ",
      users,
      //  else {
      //   // return res.status(500).send({
      //   //   success: false,
      //   //   message: "error occured while fetching all the users ",

      //   // });
      // }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error occured while fetching all the users ",
      success: false,
      error: error.message,
    });
  }
};

export const SignUpController = async (req, res) => {
  try {
    const {
      userName,
      phone,
      address,
      email,
      password,
      confirmPassword,
      answer,
    } = req.fields;
    const { userPhoto } = req.files;

    if (!userName) {
      return res.send({ message: "Name is required" });
    }
    if (!phone) {
      return res.send({ message: "Phone is required" });
    }

    if (!address) {
      return res.send({ message: "Address is required" });
    }

    if (!email) {
      return res.send({ message: "Email is required" });
    }

    if (!password) {
      return res.send({ message: "Password is required" });
    }

    if (!confirmPassword) {
      return res.send({ message: "ConfirmPassword is required" });
    }
    if (!answer) {
      return res.send({ message: " Security-Answer is required" });
    }

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res
        .status(200)
        .send({ success: false, message: "User already exist" });
    }
    const hasedPassword = await hashPassword(password);

    const user = await new UserModel({
      ...req.fields,
      password: hasedPassword,
    });

    if (userPhoto) {
      user.userPhoto.data = fs.readFileSync(userPhoto.path);
      user.userPhoto.contentType = userPhoto.type;
    } else {
      console.log("no photo added");
    }

    await user.save();

    sendMail("signup", user);
    res
      .status(200)
      .send({ success: true, message: "User successfully registered", user });
  } catch (err) {
    console.log(`${err.message} `.bgRed.black);
    res.status(303).send({ message: err.message });
  }
};
export const userPhototController = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.uid).select("userPhoto");

    if (user?.userPhoto.data) {
      res.set("Content-type", user.userPhoto.contentType);
      return res.status(200).send(user.userPhoto.data);
    }
  } catch (error) {
    console.log("cannot get photo");
    console.log(error);
    res
      .status(400)
      .send({ success: false, message: "cannot get photo", error });
  }
};
export const getSingleUserController = async (req, res) => {
  try {
    console.log("add it");
  } catch (error) {}
};

export const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "Fill the fieldsets",
      });
    }

    const user = await UserModel.findOne({ email });
    const token = jwt.sign({ _id: user._id }, JWT_secret_Key, {
      expiresIn: "7d",
    });
    if (user) {
      const ismatch = await comparePassword(password, user.password);
      if (ismatch) {
        return res.status(200).send({
          success: true,
          message: "User login successfully",
          user: {
            userName: user.userName,
            email: user.email,
            address: user.address,
            phone: user.phone,
            _id: user._id,
            role: user.ROLE,
            // userPhoto: user.userPhoto,
          },
          token,
        });
      } else {
        return res
          .status(300)
          .send({ success: false, message: "Invalid credientials" });
      }
    } else {
      return res.status(500).send({ success: false, message: "invalid email" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: error.message,
      error,
    });
  }
};

export const testController = async (req, res) => {
  res.send("proctected route");
};

export const profileController = async (req, res) => {
  res.status(200).send({ ok: true });
};
export const AdminController = async (req, res) => {
  res.status(200).send({ ok: true });
};

export const forgetPasswordController = async (req, res) => {
  try {
    const { email, answer, newpassword } = req.body;
    if (!email) {
      res.status(400).send({ message: "Email is required!" });
    }
    if (!answer) {
      res.status(400).send({ message: "Security-answer is required!" });
    }
    if (!newpassword) {
      res.status(400).send({ message: "New password is required!" });
    }
    const user = await UserModel.findOne({ email, answer });
    if (!user) {
      res
        .status(404)
        .send({ success: false, message: "Email or  answer is invalid " });
    }
    const hashed = await hashPassword(newpassword);
    await UserModel.findByIdAndUpdate(user._id, {
      password: hashed,
      confirmPassword: newpassword,
    });
    res
      .status(200)
      .send({ success: true, message: "Password Reset successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error });
  }
  res.send();
};

export const updateProfileController = async (req, res) => {
  try {
    const { userName, email, address, password, phone } = req.body;
    // const {userPhoto} =  req.fields
    const user = await UserModel.findById(req.user._id);

    if (password && password.length < 6) {
      return res.send({
        error: "password is required and should be 6 character long ",
      });
    }
    const hasedPassword = password ? await hashPassword(password) : undefined;
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.user._id,
      {
        userName: userName || user.userName,
        phone: phone || user.phone,
        address: address || user.address,
        email: email || user.email,
        password: hasedPassword || user.password,
      },
      { new: true }
    );
    // if (userPhoto) {
    //   updatedUser.userPhoto.data = fs.readFileSync(userPhoto.path);
    //   updatedUser.userPhoto.contentType = userPhoto.type;
    // }
    res.status(200).send({
      success: true,
      message: `${updatedUser.userName}'s profile updated successfully `,
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ message: "error in updating the user", success: false, error });
  }
};
export const getOrdersController = async (req, res) => {
  try {
    const orders = await OrderModel.find({ buyer: req.user._id })
      .populate("products", "-photo")
      .populate("buyer", "name");
    res.json(orders);
    console.log(req.user._id);
  } catch (error) {
    console.log(error);
  }
};

export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await OrderModel.find({})
      .populate("products", "-photo")
      .populate("buyer", "name")
      .sort({ createdAt: "-1" });
    res.json(orders);
    console.log(req.user._id);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "cannot get orders error from the back",
      error,
    });
  }
};

export const OrdersStatusController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const orders = await OrderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    if (orders) {
      res.status(200).json(orders);
    } else {
      return res
        .status(300)
        .send({ success: false, message: "not updated successfuly " });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "error while updating order", error });
  }
};
