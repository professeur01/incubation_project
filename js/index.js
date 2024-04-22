/*  Wizard */
jQuery(function ($) {
  "use strict";
  //$("form#wrapped").attr("action", "send_email_1.php");
  $("#wizard_container")
    .wizard({
      // stepsWrapper: "#wrapped",
      submit: ".submit",
      unidirectional: false,
      // beforeSelect: function (event, state) {
      //   // if ($("input#website").val().length != 0) {
      //   //   return false;
      //   // } else {
      //   //     console.log($("input#email").val());
      //   //     console.log("dans le premier cas d'erreur");
      //   //     return false
      //   // }
      //   if (!state.isMovingForward) return true;
      //   var inputs = $(this).wizard("state").step.find(":input");
      //   return !inputs.length || !!inputs.valid();
      // },
    })
    .validate({
      errorPlacement: function (error, element) {
        if (element.is(":radio") || element.is(":checkbox")) {
          error.insertBefore(element.next());
        } else {
          error.insertAfter(element);
        }
      },
    });
  //  progress bar
  $("#progressbar").progressbar();
  $("#wizard_container").wizard({
    afterSelect: function (event, state) {
      $("#progressbar").progressbar("value", state.percentComplete);
      $("#location").text(
        "" + state.stepsComplete + " of " + state.stepsPossible + " completed"
      );
    },
  });
});

// $("#wizard_container").wizard({
//   transitions: {
//     branchtype: function ($step, action) {
//       var branch = $step.find(":checked").val();
//       if (!branch) {
//         $("form").valid();
//       }
//       return branch;
//     },
//   },
// });
// ================= Register finish =======================
/* const registerClosedButton = document.getElementById('register-closed');

registerClosedButton.addEventListener('click', () => {
    // Obtenez la date d'aujourd'hui
    const today = new Date();

    // Soustrayez un jour à la date d'aujourd'hui pour obtenir la date d'hier
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    // Obtenez la date d'inscription fermée (28 décembre 2023 dans cet exemple)
    const registrationClosedDate = new Date('2023-12-27');

    // Vérifiez si la date d'hier est dépassée
    if (yesterday > registrationClosedDate) {
        // Redirigez l'utilisateur vers une nouvelle page
        window.location.href = 'registerFinish.html';
    } else {
        // Affichez un message si l'inscription est encore ouverte
        alert('l\'inscription est toujours ouverte.');
    }
}); */
// ================= End =======================

//---------------------FORM------------------------

// Input name and email value
function getVals(formControl, controlType) {
  switch (controlType) {
    case "prenom_field":
      // Get the value for input
      var value = $(formControl).val();
      $("#prenom_field").text(value);
      break;

      case "nom_field":
        // Get the value for input
        var value = $(formControl).val();
        $("#nom_field").text(value);
        break;

    case "mail_field":
      // Get the value for input
      var value = $(formControl).val();
      $("#mail_field").text(value);
      break;

    case "telephone_field":
      // Get the value for phone input
      var value = $(formControl).val();
      $("#telephone_field").text(value);
      break;

    case "adresse_physique_field":
      // Get the value for input
      var value = $(formControl).val();
      $("#adresse_physique_field").text(value);
      break;

    case "age_field":
      // Get the value for input
      var value = $(formControl).val();
      $("#age_field").text(value);
      break;

    case "secteur_activite_field":
      // Get the value for input
      var value = $(formControl).val();
      $("#secteur_activite_field").text(value);
      break;

      case "activite_extra_pro_field":
      // Get the value for date input
      var value = $(formControl).val();
      $("#activite_extra_pro_field").text(value);
      break;

    case "raison_creation_startup_field":
      // Get the value for phone input
      var value = $(formControl).val();
      $("#raison_creation_startup_field").text(value);
      break;

    case "probleme_identifier":
      // Get the value for date input
      var value = $(formControl).val();
      $("#probleme_identifier").text(value);
      break;

    case "solution_qui_se_demarque_field":
      // Get the value for textarea when "Autre" is selected
      var value = $(formControl).val();
      $("#solution_qui_se_demarque_field").text(value);
      break;

    case "pourquoi_votre_idee_est_bonne_field":
      // Get the value for textarea when "Autre" is selected
      var value = $(formControl).val();
      $("#pourquoi_votre_idee_est_bonne_field").text(value);
      break;

    case "strategie_mise_en_oeuvre_field":
      // Get the value for textarea when "Autre" is selected
      var value = $(formControl).val();
      $("#strategie_mise_en_oeuvre_field").text(value);
      break;

    case "moyen_acquerir_clients_field":
      // Get the value for textarea when "Autre" is selected
      var value = $(formControl).val();
      $("#moyen_acquerir_clients_field").text(value);
      break;

    case "mission_specifique_field":
      // Get the value for textarea when "Autre" is selected
      var value = $(formControl).val();
      $("#mission_specifique_field").text(value);
      break;

    case "contribution_environnemental_field":
      // Get the value for textarea when "Autre" is selected
      var value = $(formControl).val();
      $("#contribution_environnemental_field").text(value);
      break;

    case "resultat_escomptes_field":
      // Get the value for textarea when "Autre" is selected
      var value = $(formControl).val();
      $("#resultat_escomptes_field").text(value);
      break;

    case "engagement_vie_field":
      // Get the value for textarea when "Autre" is selected
      var value = $(formControl).val();
      $("#engagement_vie_field").text(value);
      break;

    case "gerer_defis_field":
      // Get the value for textarea when "Autre" is selected
      var value = $(formControl).val();
      $("#gerer_defis_field").text(value);
      break;

    case "donneePersonnel_field":
      // Get the value of the first radio button
      if ($(formControl).is(":checked")) {
        var value = $(formControl).val();
        $("#donneePersonnel_field").text(value);
      }
      break;
  }
}

const checkActive = document.querySelector(".check");
const btncacher = document.querySelector(".cacher");


checkActive.addEventListener("click", () => {
  if (checkActive.checked) {
    console.log("checked");
    checkActive.checked = true;
    btncacher.style.display = "block";
  } else {
    console.log("unchecked");
    btncacher.style.display = "none";
  }
});
// -----------------------------Montrer la politique de Confidentialité------------------------------------
// ... (votre JavaScript existant) ...
/* 
document.addEventListener("DOMContentLoaded", function () {
  const steps = Array.from(document.querySelectorAll("form .step"));
  const nextBtn = document.querySelectorAll("form .next-btn");
  const prevBtn = document.querySelectorAll("form .previous-btn");

  nextBtn.forEach((button) => {
    button.addEventListener("click", () => {
      changeStep("next");
    });
  });

  prevBtn.forEach((button) => {
    button.addEventListener("click", () => {
      changeStep("prev");
    });
  });

  function changeStep(btn) {
    let index = 0;
    const active = document.querySelector(".step.active");

    if (active) {
      index = steps.indexOf(active);
      steps[index].classList.remove("active");

      if (btn === "next") {
        index++;
      } else if (btn === "prev") {
        index--;
      }
    }

    if (index >= 0 && index < steps.length) {
      steps[index].classList.add("active");
    }
  }
});
 */
document.addEventListener("DOMContentLoaded", function () {
  const steps = Array.from(document.querySelectorAll("form .step"));
  const nextBtn = document.querySelectorAll("form .next-btn");
  const prevBtn = document.querySelectorAll("form .previous-btn");

  nextBtn.forEach((button) => {
    button.addEventListener("click", () => {
      if (isStepValid()) {
        changeStep("next");
      } else {
        alert("Veuillez remplir tous les champs obligatoires avant de passer à l'étape suivante.");
      }
    });
  });

  prevBtn.forEach((button) => {
    button.addEventListener("click", () => {
      changeStep("prev");
    });
  });

  function changeStep(btn) {
    let index = 0;
    const active = document.querySelector(".step.active");

    if (active) {
      index = steps.indexOf(active);
      steps[index].classList.remove("active");

      if (btn === "next") {
        index++;
      } else if (btn === "prev") {
        index--;
      }
    }

    if (index >= 0 && index < steps.length) {
      steps[index].classList.add("active");
    }
  }

  function isStepValid() {
    const requiredFields = Array.from(document.querySelectorAll(".step.active input[required], .step.active select[required], .step.active textarea[required]"));
    return requiredFields.every((field) => field.value.trim() !== "");
  }
});

//_______________________ Saisir un nombre negatif____________________
const formElement = document.querySelector('#wrapped')
const apiUrl = 'http://localhost:3000/submit-form'

formElement.addEventListener('submit', function (event) { 
  event.preventDefault();
  //input, select, textarea
  const inputsElements = formElement.querySelectorAll('input');
  const selectsElements = formElement.querySelectorAll('select');
  const textareasElements = formElement.querySelectorAll('textarea');

  const values = {};

  [...inputsElements, ...selectsElements, ...textareasElements].forEach(el => {
    const name = el.getAttribute('name')
    values[name] = el.value
  });
  console.log(values);
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
  .then(res => {
    
    window.location.href = `${window.location.origin}/thanks.html`;
    console.log(res);
  })
  .catch(err => {console.log(err);});
 })

 // :::::::::::::::::::::::::::Confettie loading::::::::::::::::::


