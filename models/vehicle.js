// require db/connection as 'mongoose' and pull off Schema
const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

// create the schema
const VehicleSchema = new Schema({
    name: String,
    color: String
})

// export the schema
module.exports = mongoose.model('Vehicle', VehicleSchema)