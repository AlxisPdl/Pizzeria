const express = require('express')
const app = express()
const port = 3030
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors')
const sequelize = require('./config/database.config.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use('/users', require('./routes/users.route.js'));
app.use('/pizzas', require('./routes/pizza.route.js'));

app.post('/contact', async (req, res) => {

    const { nom, prenom, email, message } = req.body;


    const transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
            user: 'alxisdevtest@outlook.com',
            pass: 'ytreza54321'
        }
    });


    const mailOptions = {
        from: 'alxisdevtest@outlook.com',
        to: 'alxisdevtest@outlook.com',
        subject: 'Message depuis le formulaire de contact',
        text: `Nom: ${nom}\nPrenom: ${prenom}\nEmail: ${email}\nMessage: ${message}`
    };


   await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Erreur: Votre message n\'a pas pu être envoyé.');
        } else {
            console.log('Email envoyé: ' + info.response);
            res.send('Votre message a bien été envoyé.');
            
        }
    });

    
});

app.listen(port, async () => {
    try {
    await sequelize.authenticate();
    console.log('Connection à la base de données réussie.');
    console.log(`Serveur démarré sur le port ${port}.`);
    } catch (error) {
    console.error('Impossible de se connecter à la base de données:', error);
    }
});


