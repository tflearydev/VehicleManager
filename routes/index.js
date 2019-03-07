// const shopController = require
const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerController.js')
// const vehicleController = require('../controllers/vehicleController.js')

// Shop routes
router.get('/', customerController.index)
router.get('/new', customerController.new)
router.post('/', customerController.create)
router.get('/:vehicleId', customerController.show)
router.get('/:vehicleId/edit', customerController.edit)
router.put('/:vehicleId', customerController.update)
router.delete('/:vehicleId', customerController.delete)

// Vehicle routes
// router.get('/:vehicleId/vehicle/:vehicleId', vehicleController.show)
// router.get('/:vehicleId/vehicle/new', vehicleController.new)
// router.post('/:vehicleId/vehicle', vehicleController.create)
// router.get('/:vehicleId/vehicle/:vehicleId/edit', vehicleController.edit)
// router.put('/:vehicleId/vehicle/:vehicleId', vehicleController.update)
// router.delete('/:vehicleId/vehicle/:vehicleId', vehicleController.delete)



module.exports = router