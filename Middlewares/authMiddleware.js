import JWT from "jsonwebtoken";
const JWT_secret_Key = "dubaduba";

import UserModel from "../Models/UserModel.js";

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(req.headers.authorization, JWT_secret_Key);
    req.user = decode;
    console.log("working good")

    next();
  } catch (error) {
    console.log(error, "from required sign up");

    res.status(500).send({ success: false, message: error.message, error });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user._id);
    if (user.ROLE !== 1) {
      return res.status(401).send("unauthorized acess!!");
    } else {
      next();
    }
  } catch (error) {
    console.log(error, "from isadmin");
    res.json({ message: error.message });
  }
};
