// const customerController = require
const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerController.js')
const vehicleController = require('../controllers/vehicleController.js')
const shopController = require('../controllers/shopController')


// Application routes commented out directly below will be used as I add a home authentication login page, and will add an instance to all other routes
// router.get('/', appController.index)

// Shop routes / edit and update disabled at this time being
router.get('/shop', shopController.index)
router.get('/shop/new', shopController.new)
router.post('/shop', shopController.create)
router.get('/shop/:shopId', shopController.show)
// router.get('/:vehicleId/vehicle/:vehicleId/edit', vehicleController.edit)
// router.put('/vehicle/:vehicleId', shopController.update)
router.delete('/shop/:shopId', shopController.delete)

// Customer routes
router.get('/', customerController.index)
router.get('/new', customerController.new)
router.post('/', customerController.create)
router.get('/:customerId', customerController.show)
router.get('/:customerId/edit', customerController.edit)
router.put('/:customerId', customerController.update)
router.delete('/:customerId', customerController.delete)

// Vehicle routes / edit and update disabled at this time being
router.get('/vehicle', vehicleController.index)
router.get('/vehicle/new', vehicleController.new)
router.post('/vehicle', vehicleController.create)
router.get('/vehicle/:vehicleId', vehicleController.show)
// router.get('/:vehicleId/vehicle/:vehicleId/edit', vehicleController.edit)
// router.put('/vehicle/:vehicleId', vehicleController.update)
router.delete('/vehicle/:vehicleId', vehicleController.delete)


module.exports = router