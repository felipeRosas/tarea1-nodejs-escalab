const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    phone:{
        type: Number,
        required: true
    },
    role: {
      type: String,
      default: "Client",
    },
    address: String,
    dateOfBirth: {
        type: Date,
        required: true
    },
    pets: [{type: ObjectId, ref: 'Pacient'}]
  },
  { timestamps: true }
)

module.exports = mongoose.model("User", userSchema)