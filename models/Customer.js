const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const VehicleSchema = new Schema({
    name: String,
    color: String
})


const CustomerSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    imgLink: String,
    vehicleList: [VehicleSchema]
})

module.exports = mongoose.model('Customer', CustomerSchema)