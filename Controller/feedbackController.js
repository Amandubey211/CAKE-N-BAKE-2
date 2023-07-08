import FeedBackModel from "../Models/FeedBackModel.js";

export const feedbackController = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, phone, email, message } = req.body;
    const feedback = new FeedBackModel({
      username: username,
      phone: phone,
      email: email,
      message: message,
      userId: id,
    })
    await feedback.save()
    res
      .status(200)
      .send({
        success: true,
        message: " THANK YOU! FOR YOUR Feedback ",
        feedback,
      });
  } catch (error) {
    console.log(error);
  }
};
