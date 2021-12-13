const express = require("express");
const router = express.Router();

const { create } = require('../controllers/pacient')

router.post('/pacient', create)

module.exports = router;