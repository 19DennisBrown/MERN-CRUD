

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const UserModel = require('./models/USers.js')

app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://dennisbrown:dennis0987654321@clusternode.2fu5c.mongodb.net/crud")

app.get('/', (req,res)=>{
  res.send("Data heree")
})
const port = 5000

// Creating new user API
app.post("/createUser", (req, res)=>{
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.listen(port, ()=>{
  console.log(`Server is active at port ${port}`)
})