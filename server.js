//importing properties from various json packages
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import User from "./models/User.js";
const port = process.env.PORT;
const app = express();
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extented: true }));

// working with params
app.post("/post-user", async (req, res) => {
  try {
    const { fullName, email, sex, age } = req.body;
    const saveUser = await User.create({
      fullName,
      email,
      sex,
      age,
    });
    if (saveUser) {
      return res.status(200).json({ message: "user create successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

//to get data from database
app.get("/get-users", async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json({ allUsers });
  } catch (err) {
    console.log(err);
  }
});

// to update
app.put("/update-user/:myId", async (req, res) => {
  try {
    const { myId } = req.params;
    const { fullName } = req.body;
    //  use the id from the params to update the user
    const updatedUser = await User.findByIdAndUpdate(myId, {
      fullName: fullName,
    });
    res.status(200).json({ message: "user updated" });
  } catch (err) {
    console.log(err);
  }
});

// to delete
app.delete("/delete-user/:myId", async (req, res) => {
  try {
    const { myId } = req.params;
    const deleteUser = await User.findByIdAndDelete(myId);
    if (!deleteUser) return res.status(404).json({ message: "user not found" });
    res.status(200).json({ message: "user deleted successfully" });
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`I'm connected to  port ${port}`);
});
