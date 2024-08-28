const express = require('express');
const router = express.Router();
const CountdownControllers = require('../controllers/CountdownControllers');
router.get('/getCountdown', CountdownControllers.getCountdown);


module.exports = router;