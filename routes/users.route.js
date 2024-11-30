const express = require("express");
const UserModel = require("../models/users.model.js");
const userRouter = express.Router();
userRouter.post("/create-user", async (req, res) => {
  const { userName, email, password,age } = req.body;
  try {
    const user = new UserModel({
      userName,
      email,
      password,
      age,
    });
    await user.save();
    res.status(201).json({ mesg: `user created successfully ${user}` });
  } catch (error) {
    res.status(404).json({ mesg: `error in creating user ${error}` });
  }
});
userRouter.get("/get-users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({ mesg: `users fetched successfully ${users}` });
  } catch (error) {
    res.status(404).json({ mesg: `error in fetching users ${error}` });
  }
});
userRouter.patch("/update-user/:id",async(req,res)=>{
    const {id} = req.params;
try {
    const updatedUser = UserModel.findByIdAndUpdate({_id:id},req.body);
    res.status(200).json({mesg:`user updated successfully ${updatedUser}`});
} catch (error) {
    res.status(404).json({mesg:`error in updating user ${error}`})
}
});
userRouter.delete("/delete-user/:id",async(req,res)=>{
    const {id} = req.params;
try {
    const deletedUser = UserModel.findByIdAndDelete({_id:id});
    res.status(200).json({mesg:`user deleted successfully ${updatedUser}`});
} catch (error) {
    res.status(404).json({mesg:`error in deleting user ${error}`})
}
});
module.exports = userRouter;
