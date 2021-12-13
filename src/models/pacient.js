const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const pacientSchema = new mongoose.Schema(
    {
        name: String,
        specie: {
            type: String,
            enum: ['Cat', 'Dog', 'Hamster', 'Rabbit',]
        },
        breed: {
            type: String,
            required: true
        },
        dateOfBirth: {
            type: Date,
            required: true
        },
        vaccines: [{type: ObjectId, ref:'Vaccine'}]
    },
    {timestamp: true}
)

module.exports = mongoose.model('Pacient', pacientSchema)