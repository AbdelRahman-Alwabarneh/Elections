const express = require('express');
const router = express.Router();
const Ads_Controller = require('../controllers/AdsController');

console.log("inside router");
router.post('/AddAds', Ads_Controller.AddAds);
console.log("after ads router");
router.get('/getAds', Ads_Controller.getAds);
router.get('/getInvoice', Ads_Controller.getInvoice);
module.exports = router;