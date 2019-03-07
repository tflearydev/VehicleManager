const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

// const VehicleSchema = new Schema({
//     name: String,
//     price: String
// })


const Customer = new Schema({
    name: String,
    email: String,
    imgLink: String,
    // vehicleList: [],
})

module.exports = mongoose.model('Customer', Customer)