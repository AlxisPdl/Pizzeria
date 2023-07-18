const Salade = require('../models/salade.model');

module.exports.createSalade = async (req, res) => {
    try {
        const { nom, description, prix, image } = req.body;
        const salade = await Salade.create({
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
        const salades = await Salade.findAll();
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
        const salade = await Salade.findByPk(req.params.id);
        const { nom, description, prix, image } = salade;

        res.status(200).json({
            error: false,
            salade: {
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
            message: "Erreur lors de la récupération de la salade",
        })
    }
};

module.exports.updateSalade = async (req, res) => {
    try {
        const { nom, description, prix, image } = req.body;

        const salade = await Salade.findOne({ where: { id: req.params.id } });

        if (!salade) {
            return res.status(404).json({
                error: true,
                message: "salade non trouvé",
            });
        }

        const updatedData = {
            nom: nom ? nom : salade.nom,
            description: description ? description : salade.description,
            prix: prix ? prix : salade.prix,
            image: image ? image : salade.image
        };

        await salade.update(updatedData);

        res.status(201).json({
            error: false,
            message: "Salade modifié avec succès",
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
        const { id } = req.params;
        const salade = await Salade.findOne({
            where: {
                id: req.params.id
            }
        });

        if (salade) {
            await salade.destroy();
            res.status(200).json({
                error: false,
                message: "Salade supprimé avec succès",
            });
        } else {
            res.status(404).json({
                error: true,
                message: "Salade non trouvé",
            });
        }
        } catch (error) {
                console.error(error);
                res.status(500).json({
                    error: true,
                    message: "Erreur lors de la suppression de la salade",
                });
        }  
};


