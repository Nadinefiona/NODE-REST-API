import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "todo is required"],
  },
  description: {
    type: String,
    required: [true, "todo is required"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const todo = mongoose.model("todo", todoSchema);


export default todo;
