//importing the needful mongoose properties
import { Schema, model, Types } from "mongoose";

const mySchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    sex: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    age: {
      type: String,
      enum: ["12 - 17", "18 - 25", "26 & above"],
    },
  },
  { timeStamps: true }
);

const User = model("user", mySchema);

export default User;
