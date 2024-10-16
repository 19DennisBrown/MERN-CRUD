

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const UserModel = require('./models/USers.js')

app.use(cors())
app.use(express.json()) //Use of json formats
mongoose.connect("mongodb+srv://dennisbrown:dennis0987654321@clusternode.2fu5c.mongodb.net/crud")

const port = 5000
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
// Individual user
app.get('/getUser/:id', async (req, res)=>{
  const id = req.params.id
  try {
    const userOne = await UserModel.findById({_id:id})
  res.status(200).json(userOne)
  } catch(err){
    res.status(500).json({'message': err.message})
  }
})

// Update user
app.put('/updateUser/:id', async(req, res)=>{
  const id = req.params.id;
  try{

    const data = await UserModel.findByIdAndUpdate(
      {_id:id},
      {
        name: req.body.name,
        email: req.body.email,
        age : req.body.age
      })
      res.status(200).json(data)
    } catch(err){
      res.status(500).json({
        "message": err.message
      })
    }
})
// delete User
app.delete('/deleteUser/:id', async (req, res)=>{
  const id = req.params.id
  try {
    const deleted = await UserModel.findByIdAndDelete(
      {_id:id}
    )
    res.status(200).json(deleted)
  } catch (err) {
    res.status(500).json({
      "message": err.message
    })
  }
})

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