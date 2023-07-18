const Panini = require('../models/panini.model');

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
        const panini = await Panini.findByPk(req.params.id);
        const { nom, description, prix, image } = panini;

        res.status(200).json({
            error: false,
            panini: {
                nom,
                description,
                prix,
                image
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la récupération du panini",
        })
    }
};

module.exports.updatePanini = async (req, res) => {
    try {
        const { nom, description, prix, image } = req.body;

        const panini = await Panini.findOne({ where: { id: req.params.id } });

        if (!panini) {
            return res.status(404).json({
                error: true,
                message: "Panini non trouvé",
            });
        }

        const updatedData = {
            nom: nom ? nom : panini.nom,
            description: description ? description : panini.description,
            prix: prix ? prix : panini.prix,
            image: image ? image : panini.image
        };

        await panini.update(updatedData);

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
        const { id } = req.params;
        const panini = await Panini.findOne({
            where: {
                id: req.params.id
            }
        });

        if (panini) {
            await panini.destroy();
            res.status(200).json({
                error: false,
                message: "Panini supprimé avec succès",
            });
        } else {
            res.status(404).json({
                error: true,
                message: "Panini non trouvé",
            });
        }
        } catch (error) {
                console.error(error);
                res.status(500).json({
                    error: true,
                    message: "Erreur lors de la suppression du panini",
                });
        }  
};


