const { Pizza } = require('../models/pizza.model');

module.exports.createPizza = async (req, res) => {
    try {
        const { nom, description, prix_petite, prix_moyenne, prix_grande, image } = req.body;
        const pizza = await Pizza.create({
            nom,
            description,
            prix_petite,
            prix_moyenne,
            prix_grande,
            image

        }); 
        

        res.status(201).json({
            error: false,
            message: "Pizza crée avec succès",
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la création de la pizza",
        })
    }
}

module.exports.getAllPizzas = async (req, res) => {
    try {
        const pizzas = await Pizza.findAll();
        res.status(200).json({
            error: false,
            pizzas
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la récupération des pizzas",
        })
    }
}

module.exports.getPizzaById = async (req, res) => {
    try {
        const pizza = await Pizza.findOne(req.params.id);
        res.status(200).json({
            error: false,
            pizza
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la récupération de la pizza",
        })
    }
}

module.exports.updatePizza = async (req, res) => {
    try {
        const pizza = await Pizza.findOne(req.params.id);
        const { nom, description, prix_petite, prix_moyenne, prix_grande, image } = req.body;
        await pizza.update({
            nom,
            description,
            prix_petite,
            prix_moyenne,
            prix_grande,
            image
        });
        res.status(200).json({
            error: false,
            message: "Pizza modifiée avec succès",
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la modification de la pizza",
        })
    }
}

module.exports.deletePizza = async (req, res) => {
    try {
        const { id } = req.params;
        const pizza = await Pizza.findOne(req.params.id);
        if (pizza) {
            await pizza.destroy();
            res.status(200).json({
                error: false,
                message: "Pizza supprimée avec succès",
            })
        } else {
            res.status(404).json({ message: 'Pizza non trouvée' });
          }
      
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la suppression de la pizza",
        })
    }
}

