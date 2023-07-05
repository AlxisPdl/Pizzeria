const express = require('express');
const router = express.Router();
const paniniController = require('../controllers/panini.controller');

// get all paninis
router.get('/', paniniController.getAllPaninis);

// get panini by ID
router.get('/:id', paniniController.getPaniniById);

// create new panini
router.post('/', paniniController.createPanini);

// update panini by ID
router.put('/:id', paniniController.updatePanini);

// delete panini by ID
router.delete('/:id', paniniController.deletePanini);

module.exports = router;

