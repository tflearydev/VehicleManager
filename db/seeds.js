const mongoose = require("./connection.js");
const Shop = require("../models/Shop.js")
const Customer = require("../models/Customer.js");
const Vehicle = require("../models/Vehicle.js");


const ez = new Shop({
  name: "EZ Auto Repair",
  address: {
    street: '555 Ponce de Leon Ave',
    city: 'Atlanta',
    state: 'GA',
    zipCode: '30318'
  },
  phoneNumber: '404-543-6788'
})

const tire = new Shop({
  name: "Tire King",
  address: {
    street: '555 Ponce de Leon Ave',
    city: 'Atlanta',
    state: 'GA',
    zipCode: '30318'
  },
  phoneNumber: '404-543-6788'
})
////
const michael = new Customer({
  name: "Michael Smith",
  email: "michaelsmith@gmail.com",
  phone: "678-757-8888",
  imgLink: "https://www.4wheelsnews.com/images/photo_galleries/large/28230/topcar-lamborghini-urus-0.jpg",
  vehicleList: [lambo]
  //serviceList: [oil]
});

const alexander = new Customer({
  name: "Alexander Allen",
  email: "alexander@gmail.com",
  phone: "404-333-3333",
  imgLink: "http://www.autotribute.com/wp-content/uploads/2015/04/McLaren-540C-supercar-coupe.jpg",
  vehicleList: [mclaren]
  //serviceList: [brakes]
});

const james = new Customer({
  name: "James Connor",
  email: "jamesoconner@gmail.com",
  phone: "404-555-5555",
  imgLink: "http://www.allwhitebackground.com/images/1/Aston-Martin-5.png",
  vehicleList: [aston]
  //serviceList: [wash]
});

const chris = new Customer({
  name: "Chris Henrick",
  email: "chenrick@gmail.com",
  phone: "678-000-8889",
  imgLink: "https://purepng.com/public/uploads/large/purepng.com-white-audiaudicarluxurious-carprofessional-carwhite-audi-1701527409201rfscd.png",
  vehicleList: [audi]
  // serviceList: [alignment]
});


////
const lambo = new Vehicle({
  name: "2019 Lamborghini Urus",
  color: "Forest Green"
});

const mclaren = new Vehicle({
  name: "2016 Mclaren 570s",
  color: "Candy Apple Red"
});

const aston = new Vehicle({
  name: "2016 Aston Martin DB9",
  color: "Gun Metal Gray"
});

const audi = new Vehicle({
  name: "2014 Audi A5 Coupe",
  color: "Pearl White"
});
///////




Vehicle.remove({})
  .then(() => Vehicle.create([lambo, mclaren, aston, audi]))
  .then(() => {
    console.log("seeded successfully");
    mongoose.connection.close();
  })
  .catch(err => console.log(err, "error!"));

Shop.remove({})
  .then(() => Shop.create([ez, tire]))
  .then(() => {
    console.log("seeded successfully");
    mongoose.connection.close();
  })
  .catch(err => console.log(err, "error!"));

Customer.remove({})
  .then(() => Customer.create([michael, alexander, james, chris]))
  .then(() => {
    console.log("seeded successfully");
    mongoose.connection.close();
  })
  .catch(err => console.log(err, "error!"));

  

  