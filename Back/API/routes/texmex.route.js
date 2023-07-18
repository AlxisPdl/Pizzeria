const express = require('express');
const router = express.Router();
const texmexController = require('../controllers/texmex.controller');

// get all texmexs
router.get('/', texmexController.getAllTexmexs);

// get texmex by ID
router.get('/:id', texmexController.getTexmexById);

// create new texmex
router.post('/create', texmexController.createTexmex);

// update texmex by ID
router.put('/update/:id', texmexController.updateTexmex);

// delete texmex by ID
router.delete('/delete/:id', texmexController.deleteTexmex);

module.exports = router;
