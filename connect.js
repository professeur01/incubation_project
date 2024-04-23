const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')
require("dotenv").config();


const app = express();
app.use(cors())
const port = process.env.PORT || 3000;

//enable cors policy

// Connexion à MongoDB
mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connexion à MongoDB réussie");
  })
  .catch((err) => {
    console.error("Erreur de connexion à MongoDB", err);
  });

// Middleware pour parser le corps des requêtes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware pour servir des fichiers statiques depuis le répertoire public
app.use(express.static(__dirname));

// Route pour gérer la soumission du formulaire
app.post("/submit-form", (req, res) => {
  // Récupérer les données du formulaire depuis req.body
  const formData = req.body;
  console.log(formData);
  // Enregistrer les données dans la base de données MongoDB
  // Utilisez le modèle MongoDB que vous avez créé pour les données du formulaire
  const User = require("./model/user"); // Assurez-vous d'ajuster le chemin en fonction de votre structure de fichiers

  // Enregistrez les données à l'aide de mongoose
  const userData = new User({
    prenom: req.body.prenom,
    nom: req.body.nom,
    mail: req.body.mail,
    telephone: req.body.telephone,
    adresse_physique: req.body.adresse_physique,
    age: +req.body.age,
    secteur_activite: req.body.secteur_activite,
    raison_creation_startup: req.body.raison_creation_startup,
    probleme_identifier: req.body.probleme_identifier,
    solution_qui_se_demarque: req.body.solution_qui_se_demarque,
    pourquoi_votre_idee_est_bonne: req.body.pourquoi_votre_idee_est_bonne,
    strategie_mise_en_oeuvre: req.body.strategie_mise_en_oeuvre,
    moyen_acquerir_clients: req.body.moyen_acquerir_clients,
    mission_specifique: req.body.mission_specifique,
    contribution_environnemental: req.body.contribution_environnemental,
    resultat_escomptes: req.body.resultat_escomptes,
    engagement_vie: req.body.engagement_vie,
    gerer_defis: req.body.gerer_defis,
    engagement_communautaire: req.body.engagement_communautaire,
    passe_temps: req.body.passe_temps,
    activite_extra_pro_influence_entrepreunariat: req.body.activite_extra_pro_influence_entrepreunariat,
    donneePersonnel: req.body.donneePersonnel,
    // Ajoutez d'autres champs selon les données de votre formulaire
  });

  // Enregistrez les données dans la base de données
    userData
    .save()
    .then(() => {
    })
    .catch((err) => {
      // En cas d'erreur lors de l'enregistrement
      console.error("Erreur lors de l'enregistrement des données :", err);
      // Répondre avec un statut d'erreur et un message
      res.setHeader('Content-Type', 'application/json');
      return res.status(500).json({
        error:
          "Erreur lors de l'enregistrement des données dans la base de données.",
      });
    });

  // Répondre avec un message de succès
  res.setHeader('Content-Type', 'application/json');
  return res
    .status(200)
    .json({ message: "Données du formulaire enregistrées avec succès !" });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
