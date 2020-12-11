const router = require('express').Router();

const countsController = require('../app/controllers/countsController');

router.post('/api/v1/counts', countsController.index);

module.exports = router;
