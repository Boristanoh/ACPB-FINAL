const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const SibApiV3Sdk = require('sib-api-v3-sdk');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const SENDINBLUE_API_KEY = process.env.SENDINBLUE_API_KEY;
console.log('Sendinblue API Key:', SENDINBLUE_API_KEY);

const LIST_ID = 3; // Remplacez par l'ID de votre liste Sendinblue

// Middleware pour analyser le corps des requêtes en JSON et x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuration de l'API Sendinblue
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = SENDINBLUE_API_KEY;

// Fonction pour ajouter l'e-mail à la liste Sendinblue
async function addToSendinblueList(email) {
    const apiInstance = new SibApiV3Sdk.ContactsApi();
    const createContact = new SibApiV3Sdk.CreateContact();
    createContact.email = email;
    createContact.listIds = [LIST_ID];

    try {
        await apiInstance.createContact(createContact);
        console.log(`Email ${email} ajouté à la liste.`);
    } catch (error) {
        if (error.response && error.response.body) {
            console.error('Erreur détaillée:', error.response.body);
        } else {
            console.error('Erreur:', error);
        }
        throw error;
    }
}

// Fonction pour envoyer l'e-mail de confirmation
async function sendConfirmationEmail(email) {
    // const msg = {
    //     to: email,
    //     from: 'acpb.inphb@gmail.com', // Remplacez par votre adresse e-mail
    //     subject: 'Confirmation d\'inscription à la newsletter',
    //     text: 'Merci de vous être inscrit à notre newsletter.'
    //     // Vous pouvez également utiliser HTML pour un e-mail plus stylisé
    //     // html: '<strong>Merci de vous être inscrit à notre newsletter.</strong>',
    // };

    // try {
    //     // Envoi de l'e-mail via Sendinblue
    //     await sgMail.send(msg);
    //     console.log(`Email de confirmation envoyé à ${email}.`);
    // } catch (error) {
    //     if (error.response && error.response.body) {
    //         console.error('Erreur lors de l\'envoi de l\'e-mail:', error.response.body);
    //     } else {
    //         console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    //     }
    //     throw error;
    // }
    console.log(`Email de confirmation envoyé à ${email}.`);
    alert.message(`Email ${email} ajouté à la liste.`);
}

// Route pour gérer les inscriptions
app.post('/subscribe', async (req, res) => {
    const { email } = req.body;
    console.log('Email reçu:', email);

    if (!email) {
        return res.status(400).json({ message: 'L\'email est requis.' });
    }

    try {
        // Ajout de l'e-mail à la liste Sendinblue
        await addToSendinblueList(email);

        // // Envoi de l'e-mail de confirmation
        // await sendConfirmationEmail(email);

        // Réponse au client
        res.status(200).json({ message: 'Inscription réussie!',resetInput: true });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l\'inscription.' });
    }
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
