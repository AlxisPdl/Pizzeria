const express = require('express');
const router = express.Router();
const saladeController = require('../controllers/salade.controller');

// get all salades
router.get('/', saladeController.getAllSalades);

// get salade by ID
router.get('/:id', saladeController.getSaladeById);

// create new salade
router.post('/create', saladeController.createSalade);

// update salade by ID
router.put('/update/:id', saladeController.updateSalade);

// delete salade by ID
router.delete('/delete/:id', saladeController.deleteSalade);

module.exports = router;
