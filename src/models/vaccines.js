const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema

const vaccineSchema = new mongoose.Schema(
  {
    name: String,
    dateOfApplication: {
        type: Date,
        required: true
    },
    disease: {
        type: String,
        required: true
    },
    nextApplication:{
        type: Date,
        required: true
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Vaccine", vaccineSchema)