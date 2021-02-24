const mongoose = require("mongoose")

const ShipperSchema = new mongoose.Schema({
    name: String
})


module.exports = mongoose.model("Shipper", ShipperSchema)