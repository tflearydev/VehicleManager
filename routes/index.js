const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')
const vehicleController = require('../controllers/vehicleController.js')

// User routes
router.get('/', userController.index)
router.get('/new', userController.new)
router.post('/', userController.create)
router.get('/:shopId', userController.show)
router.get('/:shopId/edit', userController.edit)
router.put('/:shopId', userController.update)
router.delete('/:shopId', userController.delete)

// Vehicle routes
router.get('/:shopId/food/:foodId', vehicleController.show)
router.get('/:shopId/food/new', vehicleController.new)
router.post('/:shopId/food', vehicleController.create)
router.get('/:shopId/food/:foodId/edit', vehicleController.edit)
router.put('/:shopId/food/:foodId', vehicleController.update)
router.delete('/:shopId/food/:foodId', vehicleController.delete)

//

module.exports = router;