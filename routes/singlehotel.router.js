const express = require('express');
const router = express.Router();

const Hotel = require("../model/hotel.model");
const singlehotelHandler = require('../controllers/singleHotelController');

// localhost:3500/api/hotels/1234567gdhd

router.route("/:id")
    .get(singlehotelHandler);

    module.exports = router ; 