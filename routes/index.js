const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')
const vehicleController = require('../controllers/vehicleController.js')

// User routes
router.get('/', userController.index)
router.get('/new', userController.new)
router.post('/', userController.create)
router.get('/:userId', userController.show)
router.get('/:userId/edit', userController.edit)
router.put('/:userId', userController.update)
router.delete('/:userId', userController.delete)

// // Vehicle routes
// router.get('/:userId/vehicle/:vehicleId', vehicleController.show)
// router.get('/:userId/vehicle/new', vehicleController.new)
// router.post('/:userId/vehicle', vehicleController.create)
// router.get('/:userId/vehicle/:vehicleId/edit', vehicleController.edit)
// router.put('/:userId/vehicle/:vehicleId', vehicleController.update)
// router.delete('/:userId/vehicle/:vehicleId', vehicleController.delete)

//

module.exports = router;