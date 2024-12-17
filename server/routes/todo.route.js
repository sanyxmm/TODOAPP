import express from "express";
import { Task } from "../models/todo.Model.js";

const router = express.Router();
//Route to placeOrder   
router.post("/addTask" , async (req, res) => {
    const {taskk} = req.body;
  
    try {
      if (!taskk) {
        return res.status(400).json({ message: "Please fill text box" });
      }
      // Create and save the task
      const task = new Task({
        taskk,
      });
  
      const savedTask = await task.save();
  
      return res.status(201).json({
        message: 'Task added successfully!',
        task: savedTask,
      });
    } 
    catch (error) {
      console.error('Error in adding task', error);
      return res.status(500).json({ message: 'Internall Server Error' });
}
});
// Route to filter orders by statusvfvf
router.get("/fetchTask",async(req,res)=>{
  try {
      // Fetch all products from the database
      const tasks = await Task.find();

      // Send success response with all products
      return res.status(200).json({
          message: 'Tasks fetched successfully',
          tasks: tasks
      });
  } catch (error) {
      // Log the error for debugging
      console.error('Error fetching tasks:', error);
      // Send a 500 error response
      return res.status(500).json({ message: 'Internal Server Error' });
  }
})
  
export {router as taskRouter};