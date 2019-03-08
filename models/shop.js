const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema



const ShopSchema = new Schema({
    name: String,
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String
  },
    phoneNumber: String
})

module.exports = mongoose.model('Shop', ShopSchema)