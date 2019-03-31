// ALL COMMENTS BELOW WILL BE USED FOR MY UPDATES- prepping
const Vehicle = require('../models/Vehicle')

const vehicleController = {
    index: (req, res) => {
        Vehicle.find()
            .then(vehicles => {
                res.render('vehicles/index', { vehicles })
            })
    },
    new: (req, res) => {
        res.render('vehicles/new')
    },
    create: (req, res) => {
        Vehicle.create(req.body).then(vehicle => {
            res.redirect('/vehicle')
        })
    },
    show: (req, res) => {
        Vehicle.findById(req.params.vehicleId).then((vehicle) => {
            res.render('vehicles/show', { vehicle })
        })
    },
    // edit and update currently disabled, will add with updates
    // edit: (req, res) => {
    //     Vehicle.findById(req.params.vehicleId).then((vehicle) => {
    //         res.render('vehicles/edit', {vehicle})
    //     })
    // },
    // update: (req, res) => {
    //     Vehicle.findByIdAndUpdate(req.params.vehicleId, req.body, {new: true}).then((updatedVehicle) => {
    //         res.redirect(`/${req.params.vehicleId}`)
    //     })
    // },
    delete: (req, res) => {
        Vehicle.findByIdAndDelete(req.params.vehicleId).then(() => {
            console.log(`deleted vehicle with id of ${req.params.vehicleId}`)
            res.redirect('/vehicle')
        })
    }
}

module.exports = vehicleController