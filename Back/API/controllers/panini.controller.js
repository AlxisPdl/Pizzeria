const { Panini } = require('../models/panini.model');

module.exports.createPanini = async (req, res) => {
    try {
        const { nom, description, prix, image } = req.body;
        const panini = await Panini.create({
            nom,
            description,
            prix,
            image
        });
        res.status(201).json({
            error: false,
            message: "Panini crée avec succès",
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la création du panini",
        })
    }
}

module.exports.getAllPaninis = async (req, res) => {
    try {
        const paninis = await Panini.findAll();
        res.status(200).json({
            error: false,
            paninis
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la récupération des paninis",
        })
    }
}

module.exports.getPaniniById = async (req, res) => {
    try {
        const panini = await Panini.findOne(req.params.id);
        res.status(200).json({
            error: false,
            panini
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la récupération du panini",
        })
    }
}

module.exports.updatePanini = async (req, res) => {
    try {
        const { nom, description, prix, image } = req.body;
        const panini = await Panini.update(req.params.id, {
            nom,
            description,
            prix,
            image
        });
        res.status(201).json({
            error: false,
            message: "Panini modifié avec succès",
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la modification du panini",
        })
    }
}

module.exports.deletePanini = async (req, res) => {
    try {
        const panini = await Panini.destroy(req.params.id);
        res.status(201).json({
            error: false,
            message: "Panini supprimé avec succès",
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la suppression du panini",
        })
    }
}

