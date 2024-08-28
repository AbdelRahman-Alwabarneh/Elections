const express = require('express');
const router = express.Router();
const circlesController = require('../controllers/circlesController');

// Route to get all circles
router.get('/circles', circlesController.getAllCircles); // Use root path here

module.exports = router;
