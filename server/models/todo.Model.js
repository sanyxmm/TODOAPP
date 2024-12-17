
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  taskk: { type: String, required: true },
});

const taskModel = mongoose.model("Task", taskSchema);
export {taskModel as Task}
