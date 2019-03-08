const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

// create schema
const VehicleSchema = new Schema({
    name: String,
    color: String
})

// export schema
module.exports = mongoose.model('Vehicle', VehicleSchema)