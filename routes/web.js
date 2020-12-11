const router = require('express').Router();

const homeController = require('../app/controllers/homeController');
const subscriberController = require('../app/controllers/subscriberController');

// Home
router.get('/', homeController.index);

// Subscriber
router.post('/subscriber', subscriberController.index);

module.exports = router;
