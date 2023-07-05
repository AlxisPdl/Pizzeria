const { texmexs } = require('../models');

module.exports.createTexmex = async (req, res) => {
    try {
        const { nom, description, prix, image } = req.body;
        const texmex = await texmexs.create({
            nom,
            description,
            prix,
            image
        });
        res.status(201).json({
            error: false,
            message: "Texmex crée avec succès",
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la création du texmex",
        })
    }
}

module.exports.getAllTexmexs = async (req, res) => {
    try {
        const texmexs = await texmexs.findAll();
        res.status(200).json({
            error: false,
            texmexs
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la récupération des texmexs",
        })
    }
}

module.exports.getTexmexById = async (req, res) => {
    try {
        const texmex = await texmexs.findOne(req.params.id);
        res.status(200).json({
            error: false,
            texmex
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la récupération du texmex",
        })
    }
}

module.exports.updateTexmex = async (req, res) => {
    try {
        const { nom, description, prix, image } = req.body;
        const texmex = await texmexs.update(req.params.id, {
            nom,
            description,
            prix,
            image
        });
        res.status(200).json({
            error: false,
            message: "Texmex modifié avec succès",
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la modification du texmex",
        })
    }
}

module.exports.deleteTexmex = async (req, res) => {
    try {
        const texmex = await texmexs.destroy(req.params.id);
        res.status(200).json({
            error: false,
            message: "Texmex supprimé avec succès",
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la suppression du texmex",
        })
    }
}

