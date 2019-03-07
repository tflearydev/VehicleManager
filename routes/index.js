// const customerController = require
const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerController.js')
const vehicleController = require('../controllers/vehicleController.js')

// Customer routes
router.get('/', customerController.index)
router.get('/new', customerController.new)
router.post('/', customerController.create)
router.get('/:customerId', customerController.show)
router.get('/:customerId/edit', customerController.edit)
router.put('/:customerId', customerController.update)
router.delete('/:customerId', customerController.delete)

// Vehicle routes
router.get('/:vehicleId/vehicle/:vehicleId', vehicleController.show)
router.get('/:vehicleId/vehicle/new', vehicleController.new)
router.post('/:vehicleId/vehicle', vehicleController.create)
router.get('/:vehicleId/vehicle/:vehicleId/edit', vehicleController.edit)
router.put('/:vehicleId/vehicle/:vehicleId', vehicleController.update)
router.delete('/:vehicleId/vehicle/:vehicleId', vehicleController.delete)



module.exports = router