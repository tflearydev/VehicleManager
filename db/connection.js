
//dotenv being required 
require('dotenv').config();
//mongoose required
const mongoose = require('mongoose');

//connecting to my database called vehicle manager
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
   } else {
    mongoose.connect("mongodb://localhost/vehicleManager");
   }
   mongoose.connection.on("error", function(err) {
    console.error("MongoDB connection error: " + err);
    process.exit(-1);
   });
   mongoose.connection.once("open", function() {
    console.log("Mongoose has connected to MongoDB!");
   });

//here is where I export my mongoose connection
   module.exports = mongoose;