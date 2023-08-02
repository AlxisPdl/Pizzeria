const Texmexs = require('../models/texmex.model');

module.exports.createTexmex = async (req, res) => {
    try {
        const { nom, description, prix, image } = req.body;
        const texmex = await Texmexs.create({
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
        const texmexs = await Texmexs.findAll();
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
        const texmex = await Texmexs.findByPk(req.params.id);
        const { nom, description, prix, image } = texmex;

        res.status(200).json({
            error: false,
            texmex: {
                nom,
                description,
                prix,
                image
            }
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
        const texmex = await Texmexs.findOne({ where: { id: req.params.id } });

        if (!texmex) {
            return res.status(404).json({
                error: true,
                message: "Texmex non trouvé",
            });
        }

        const updatedData = {
            nom: nom ? nom : texmex.nom,
            description: description ? description : texmex.description,
            prix: prix ? prix : texmex.prix,
            image: image ? image : texmex.image,
        };

        await texmex.update(updatedData);

        res.status(201).json({
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
        const { id } = req.params;
        const texmex = await Texmexs.findOne({
            where: {
                id: req.params.id
            }
        });

        if (texmex) {
            await texmex.destroy();
            res.status(200).json({
                error: false,
                message: "Texmex supprimé avec succès",
            });
        } else {
            res.status(404).json({
                error: true,
                message: "Texmex non trouvé",
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la suppression du texmex",
        });
    }
};

