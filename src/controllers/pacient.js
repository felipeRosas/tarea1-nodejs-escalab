const Pacient = require('../models/pacient')
const slugify = require("slugify")

exports.create = async (req, res) => {
    try {
        const newPacient = await new Pacient(req.body).save()
        res.json(newPacient)
    } catch (error) {
        res.status(400).json({
            error: error.message,
            code: error.code,
          });
    }
}