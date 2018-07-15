'use strict';

var addAbilityButton = document.querySelector('.abilitiesbutton--plusjs');
var removeAbilityButton = document.querySelectorAll('.abilitiesbutton--minusjs');
var fillAbilityBox = document.querySelectorAll('.fill__ability--js');
var abilitiesDropdown = document.querySelectorAll('.abilitiesdropdown--js');

function createOptionForSelect(text) {
  var option = document.createElement('option');
  var optionText = document.createTextNode(text);
  option.appendChild(optionText);
  return option;
}

function callAbilitiesAPI() {
  var url = 'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json';
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      var abilitiesList = json.skills;
      for (var a = 0; a < abilitiesDropdown.length; a++) {
        for (var b = 0; b < abilitiesList.length; b++) {
          var newSkillsOption = createOptionForSelect(abilitiesList[b]);
          abilitiesDropdown[a].appendChild(newSkillsOption);
        }
      }
    });
}

function addAbility() {
  var hiddenAbilityBox = document.querySelectorAll('.fill__ability--jshidden');

  if (hiddenAbilityBox.length === 2) {
    fillAbilityBox[1].classList.remove('fill__ability--jshidden');
  } else if (hiddenAbilityBox.length === 1) {
    fillAbilityBox[2].classList.remove('fill__ability--jshidden');
  }
}

function removeAbility(event) {
  var parentBox = event.currentTarget.parentElement;
  parentBox.classList.add('fill__ability--jshidden');
}

// function transferAbilityToCard (event) {
//   var guiltyElement = event.currentTarget;
//   var abilitiesOptions = guiltyElement.getAttribute('.option');
//
//   if (guiltyElement.classList.contains('fill__input-mail')) {
//     fillHref.href = 'mailto:' + guiltyElement.value;
//   } else if (guiltyElement.classList.contains('fill__input-phone')){
//     fillHref.href = 'tel: +34' + guiltyElement.value;
//   } else if (guiltyElement.classList.contains('fill__input-linkedin')) {
//     fillHref.href = 'https://www.linkedin.com/in/' + guiltyElement.value;
//   } else {
//     fillHref.href = 'https://github.com/' + guiltyElement.value;
//   }
// }
//
// mailInput.addEventListener('select', transferValueToHref);
// phoneInput.addEventListener('select', transferValueToHref);
// linkedinInput.addEventListener('select', transferValueToHref);
// githubInput.addEventListener('select', transferValueToHref);

addAbilityButton.addEventListener('click', addAbility);
removeAbilityButton[0].addEventListener('click', removeAbility);
removeAbilityButton[1].addEventListener('click', removeAbility);
callAbilitiesAPI();
