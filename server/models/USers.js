

const mongoose = new require("mongoose")

const UserSchema =  mongoose.Schema(
  {
    name: {
      type:String,
      required: [true, 'name is mandatory']
    },
    email: {
      type: String,
      required: [true, 'email in mandatory']
    },
    age: {
      type:Number,
      default:0,
      required: [true, 'age is mandatory']
    }
  },
  {timestamps:true}
)

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel