const { Burger } = require('../models');

module.exports.createBurger = async (req, res) => {
    try {
        const { nom, description, prix_seul, prix_menu, image } = req.body;
        const burger = await Burger.create({
            nom,
            description,
            prix_seul,
            prix_menu,
            image
        });
        res.status(201).json({
            error: false,
            message: "Burger crée avec succès",
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la création du burger",
        })
    }
}

module.exports.getAllBurgers = async (req, res) => {
    try {
        const burgers = await Burger.findAll();
        res.status(200).json({
            error: false,
            burgers
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la récupération des burgers",
        })
    }
}

module.exports.getBurgerById = async (req, res) => {
    try {
        const burger = await Burger.findOne(req.params.id);
        res.status(200).json({
            error: false,
            burger
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la récupération du burger",
        })
    }
}

module.exports.updateBurger = async (req, res) => {
    try {
        const { nom, description, prix_seul, prix_menu, image } = req.body;
        const burger = await Burger.update({
            nom,
            description,
            prix_seul,
            prix_menu,
            image
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({
            error: false,
            message: "Burger modifié avec succès",
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la modification du burger",
        })
    }
}

module.exports.deleteBurger = async (req, res) => {
    try {
        const burger = await Burger.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({
            error: false,
            message: "Burger supprimé avec succès",
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la suppression du burger",
        })
    }
}