//ALL COMMENTS BELOW ARE MY CODE EDITED OUT AND WILL BE USED FOR UPDATES

// const customerController = require
const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerController')
const vehicleController = require('../controllers/vehicleController')
const shopController = require('../controllers/shopController')


// routes commented out directly below were created to be used in next updates as my controllers show as well
// router.get('/', appController.index)


router.get('/vehicle', vehicleController.index)
router.get('/vehicle/new', vehicleController.new)
router.post('/vehicle', vehicleController.create)
router.get('/vehicle/:vehicleId', vehicleController.show)
// router.get('/:vehicleId/vehicle/:vehicleId/edit', vehicleController.edit)
// router.put('/vehicle/:vehicleId', vehicleController.update)
router.delete('/vehicle/:vehicleId', vehicleController.delete)


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


module.exports = router