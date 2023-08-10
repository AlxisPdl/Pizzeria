const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/pizza.controller.js');
const upload = require('../middlewares/upload.middleware.js');


// get all pizzas
router.get('/', pizzaController.getAllPizzas);

// get pizza by ID
router.get('/:id', pizzaController.getPizzaById);

// create new pizza
// router.post('/create', pizzaController.createPizza);

router.post('/create', upload.single('image'), pizzaController.createPizza);



// update pizza by ID
router.put('/update/:id', pizzaController.updatePizza);

// delete pizza by ID
router.delete('/delete/:id', pizzaController.deletePizza);



module.exports = router;