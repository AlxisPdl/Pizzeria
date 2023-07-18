const express = require('express');
const router = express.Router();
const burgerController = require('../controllers/burger.controller.js');

// get all burgers
router.get('/', burgerController.getAllBurgers);

// get burger by ID
router.get('/:id', burgerController.getBurgerById);

// create new burger
router.post('/create', burgerController.createBurger);

// update burger by ID
router.put('/update/:id', burgerController.updateBurger);

// delete burger by ID
router.delete('/delete/:id', burgerController.deleteBurger);

module.exports = router;
