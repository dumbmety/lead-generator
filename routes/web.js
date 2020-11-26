const router = require('express').Router()

const homeController = require('../app/controllers/homeController')
const subscriberController = require('../app/controllers/subscriberController')

router.get('/', homeController.index)

router.post('/subscriber', subscriberController.index)

module.exports = router
