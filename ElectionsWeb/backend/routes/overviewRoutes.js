const express = require('express');
const router = express.Router();
const overviewdata = require('../controllers/overviewController');

// Route to get all local lists
router.get('/overview', overviewdata.overview);


module.exports = router;
