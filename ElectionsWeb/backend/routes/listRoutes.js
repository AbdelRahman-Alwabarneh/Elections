const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');
const localController = require('../controllers/localController');

console.log(listController)
router.post('/lists', listController.createList);
router.post('/local', localController.createList);

router.get('/lists', listController.getLists);
router.put('/lists/:id', listController.updateList);
router.delete('/lists', listController.deleteList);

module.exports = router;