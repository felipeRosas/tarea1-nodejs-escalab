const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const attentionSchema = new mongoose.Schema(
    {
        pacientId: {type: ObjectId, ref: 'Pacient'},
        veterinarianId: {type: ObjectId, ref: 'User'},
        date: {
            type: Date,
            required: true
        },
        observation: {
            type: String,
            required: true
        },
        weigth: {
            type: Number,
            required: true
        },
        nextAttention: Date,
    },
    {timestamp: true}
)

module.exports = mongoose.model('Attention', attentionSchema)