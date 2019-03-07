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
  imgLink: "https://www.4wheelsnews.com/images/photo_galleries/large/28230/topcar-lamborghini-urus-0.jpg",
  // vehicleList: [toyota]
});

const alexander = new Customer({
  name: "Alexander Allen",
  email: "alexander@gmail.com",
  phone: 4043333333,
  imgLink: "http://www.autotribute.com/wp-content/uploads/2015/04/McLaren-540C-supercar-coupe.jpg",
  // vehicleList: [padThai]
});

const james = new Customer({
  name: "James Connor",
  email: "jamesoconner@gmail.com",
  phone: 4045555555,
  imgLink: "http://www.allwhitebackground.com/images/1/Aston-Martin-5.png",
  // vehicleList: [fishTaco]
});

const chris = new Customer({
  name: "Chris Henrick",
  email: "chenrick@gmail.com",
  phone: 6780008889,
  imgLink: "https://images.hgmsites.net/lrg/2015-audi-a7-4-door-hb-quattro-3-0-prestige-angular-front-exterior-view_100475579_l.jpg",
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