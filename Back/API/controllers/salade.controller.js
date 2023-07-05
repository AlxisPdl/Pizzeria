const { salades } = require('../models');

module.exports.createSalade = async (req, res) => {
    try {
        const { nom, description, prix, image } = req.body;
        const salade = await salades.create({
            nom,
            description,
            prix,
            image
        });
        res.status(201).json({
            error: false,
            message: "Salade crée avec succès",
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la création de la salade",
        })
    }
}

module.exports.getAllSalades = async (req, res) => {
    try {
        const salades = await salades.findAll();
        res.status(200).json({
            error: false,
            salades
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la récupération des salades",
        })
    }
}

module.exports.getSaladeById = async (req, res) => {
    try {
        const salade = await salades.findOne(req.params.id);
        res.status(200).json({
            error: false,
            salade
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la récupération de la salade",
        })
    }
}

module.exports.updateSalade = async (req, res) => {
    try {
        const { nom, description, prix, image } = req.body;
        const salade = await salades.update(req.params.id, {
            nom,
            description,
            prix,
            image
        });
        res.status(200).json({
            error: false,
            message: "Salade modifiée avec succès",
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la modification de la salade",
        })
    }
}

module.exports.deleteSalade = async (req, res) => {
    try {
        const salade = await salades.destroy(req.params.id);
        res.status(200).json({
            error: false,
            message: "Salade supprimée avec succès",
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la suppression de la salade",
        })
    }
}

