const Burger = require('../models/burger.model');

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
        const burger = await Burger.findByPk(req.params.id);
        const { nom, description, prix_seul, prix_menu, image } = burger;

        res.status(200).json({
            error: false,
            burger: {
                nom,
                description,
                prix_seul,
                prix_menu,
                image
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: "Erreur lors de la récupération du burger",
        })

    }
};

module.exports.updateBurger = async (req, res) => {
    try {
        const { nom, description, prix_seul, prix_menu, image } = req.body;

        const burger = await Burger.findOne({ where: { id: req.params.id } });

        if (!burger) {
            return res.status(404).json({
                error: true,
                message: "Burger non trouvé",
            });
        }

        const updatedData = {
            nom: nom ? nom : burger.nom,
            description: description ? description : burger.description,
            prix_seul: prix_seul ? prix_seul : burger.prix_seul,
            prix_menu: prix_menu ? prix_menu : burger.prix_menu,
            image: image ? image : burger.image,
        }

        await burger.update(updatedData);

        return res.status(200).json({
            error: false,
            message: "Burger modifié avec succès",
        });
    } catch (error) {
            console.error(error);
            res.status(500).json({
                error: true,
                message: "Erreur lors de la modification du burger",
            });
        }
    };

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