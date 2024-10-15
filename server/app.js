

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const UserModel = require('./models/USers.js')

app.use(cors())
app.use(express.json()) //Use of json formats
mongoose.connect("mongodb+srv://dennisbrown:dennis0987654321@clusternode.2fu5c.mongodb.net/crud")

// Getting all users
app.get('/', async (req,res)=>{
  try{
    const allUsers = await UserModel.find({})
    res.status(200).json(allUsers)
 } catch(err){
  res.status(500).json({
    message: err.message
  })
 }
})
const port = 5000

// Creating new user API
app.post("/createUser", async (req, res)=>{
  try{
    const modelUser = await UserModel.create(req.body)
    res.status(200).json(modelUser)
  } catch(err){
    res.status(500).json(
      {message: err.message}
    )
  }
})

app.listen(port, ()=>{
  console.log(`Server is active at port ${port}`)
})