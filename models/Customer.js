const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const VehicleSchema = new Schema({
    name: String,
    price: String
})


const Customer = new Schema({
    name: String,
    email: String,
    phone: Number,
    imgLink: String,
    vehicleList: [VehicleSchema],
})

module.exports = mongoose.model('Customer', Customer)