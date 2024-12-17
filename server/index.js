import express from 'express'
import cors from 'cors'
import { taskRouter } from './routes/todo.route.js'
import dbConnect from './db/dbconnect.js'

//creating app
const app = express()   
dotenv.config()
const port =  4000;

// transfer fetched data from frontend in json format
app.use(express.json())
app.use(cors({
origin:["http://localhost:3000"],
methods:["POST","GET","PATCH","PUT"],
credentials:true
}))

app.use(taskRouter)
//connection can be done in seperate file but we are doinfg it here
dbConnect();

app.listen(port,()=>{
    console.log("Server is Running")
})
