 const mongoose = require('mongoose')
const userData = new mongoose.Schema({
    prenom:{
        type: String
    },
    nom:{
        type: String
    },
    mail:{
        type: String
    },
    telephone:{
        type: String
    },
    adresse_physique:{
        type: String
    },
    age:{
        type: Number
    },
    secteur_activite:{
        type: String
    },
    raison_creation_startup:{
        type: String
    },
    probleme_identifier:{
        type: String
    },
    solution_qui_se_demarque:{
        type: String
    },
    pourquoi_votre_idee_est_bonne:{
        type: String
    },
    strategie_mise_en_oeuvre:{
        type: String
    },
    moyen_acquerir_clients:{
        type: String
    },
    mission_specifique:{
        type: String
    },
    contribution_environnemental:{
        type: String
    },
    resultat_escomptes:{
        type: String
    },
    engagement_vie:{
        type: String
    },
    gerer_defis:{
        type: String
    },
    engagement_communautaire:{
        type: String
    },
    passe_temps:{
        type: String
    },
    activite_extra_pro_influence_entrepreunariat:{
        type: String
    },
    donneePersonnel:{
        type: String
    }
});

const User = mongoose.model("User", userData)
module.exports = User 




