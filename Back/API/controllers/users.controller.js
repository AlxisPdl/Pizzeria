const { Op } = require('sequelize');
const User = require('../models/users.model.js');
const { hashPassword, comparePassword } = require("../utils/passwordHandler.utils.js");
const generateJwt = require("../utils/jwtHandler.utils.js");



exports.SignUp = async (req, res) => {

    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password)
            return res.status(400).json({
                error: true,
                message: 'Veuillez remplir tous les champs.'
            });

        const usernameRegex = /^[a-zA-Z0-9]+$/;
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/


        if (!usernameRegex.test(username))
            return res.status(400).json({
                error: true,
                message: 'Le nom d\'utilisateur doit contenir uniquement des lettres et des chiffres.'
            })

        if (!emailRegex.test(email))
            return res.status(400).json({
                error: true,
                message: 'Le mail n\'est pas valide.'
            })

        if (!passwordRegex.test(password))
            return res.status(400).json({
                error: true,
                message: 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.'
            })


        const isExist = await User.findOne({ where: { [Op.or]: [{ email: email }, { username: username }] } });

        if (isExist) {
            return res.status(400).json({
                error: true,
                message: 'Le nom d\'utilisateur ou le mail est déjà utilisé.'
            })
        }

        const hash = await hashPassword(password);

        const userData = {
            username: username,
            email: email,
            password: hash
        }

        await new User(userData).save();
        return res.status(201).json({
            error: false,
            message: "L'utilisateur a bien été créé."
        })


    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: `Une erreur est survenue : ${err}.`
        });
    }
}

exports.SignIn = async (req, res) => {

    try {
        const { identifier, password } = req.body;
        if (!identifier || !password) {
            return res.status(400).json({
                error: true,
                message: "Veuillez remplir tous les champs."
            })
        }

        let user = await User.findOne({ where: { username: identifier } });

        if (!user) {
            return res.status(400).json({
                error: true,
                message: "Le nom d'utilisateur ou le mot de passe est incorrect."
            })
        }

        const isPasswordValid = await comparePassword(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({
                error: true,
                message: "Le nom d'utilisateur ou le mot de passe est incorrect."
            })
        }

        const accessToken = await generateJwt({ 
            id: user.id,
            username: user.username,
            email: user.email,
         });
     

        await user.update({ accessToken: accessToken });

        return res.status(200).json({
            error: false,
            message: "Vous êtes bien connecté.",
            accessToken: accessToken
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: true,
            message: 'Une erreur est survenue'
        });
    }
}

