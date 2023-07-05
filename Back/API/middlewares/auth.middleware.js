const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {

        const authoHeader = req.headers.authorization;

        let result;

        if (!authoHeader || !authoHeader.split(" ")[1]) {
            return res.status(401).json({
                error: true,
                message: "La clé d'accès est manquante."
            })
        }

        const token = authoHeader.split(" ")[1];
        const user = await User.findOne({ where: { accesToken: token } });

        if (!user) {
            return res.status(401).json({
                error: true,
                message: "La clé d'accès est invalide."
            })
        }

        result = jwt.verify(token, user.secretKey, { expiresIn: '1h' });

        if (user.email !== result.email) {
            return res.status(401).json({
                error: true,
                message: "La clé d'accès est invalide."
            })
        }

        req.decoded = user;
        next();
    } catch (error) {
        console.error(error);
        let errorMessage = '';
        if (error.name === "TokenExpiredError") {
            errorMessage = "Erreur d'authentification, veuillez recharger votre session."
        } else {
            errorMessage = "Erreur d'authentification."
        }
        return res.status(403).json({
            error: true,
            message: errorMessage
        });
    }
}

module.exports = auth;