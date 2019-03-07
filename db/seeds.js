const mongoose = require("./connection.js");
const Customer = require("../models/Customer.js");
// const Vehicle = require("../models/Vehicle.js");

// const lambo = new Vehicle({
//   name: "2019 Lamborghini Urus",
//   year: "5.99"
// });

// const injera = new Food({
//   name: "Injera",
//   price: "1.00"
// });

// const fishTaco = new Food({
//   name: "Fish Taco",
//   price: "2.85"
// });

// const padThai = new Food({
//   name: "Pad Thai",
//   price: "9.00"
// });

const michael = new Customer({
  name: "Michael Smith",
  email: "michaelsmith@gmail.com",
  phone: 6787578888,
  imgLink: "./zoom1.jpg",
  // vehicleList: [toyota]
});

const alexander = new Customer({
  name: "Alexander Allen",
  email: "alexander@gmail.com",
  phone: 4043333333,
  imgLink: "./zoom2.jpg",
  // vehicleList: [padThai]
});

const james = new Customer({
  name: "James Connor",
  email: "jamesoconner@gmail.com",
  phone: 4045555555,
  imgLink: "./zoom3.jpg",
  // vehicleList: [fishTaco]
});

const chris = new Customer({
  name: "Chris Henrick",
  email: "chenrick@gmail.com",
  phone: 6780008889,
  imgLink: "./zoom4.jpg",
  // foodItems: [injera]
});

Customer.remove({})
//   .then(() => Food.remove({}))
  .then(() => Customer.create([michael, alexander, james, chris]))
//   .then(() => Food.insertMany([pizza, injera, padThai, fishTaco]))
  .then(() => {
    console.log("seeded successfully");
    mongoose.connection.close();
  })
  .catch(err => console.log(err, "error!"));