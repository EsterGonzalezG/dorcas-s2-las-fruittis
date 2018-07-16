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

addAbilityButton.addEventListener('click', addAbility);
removeAbilityButton[0].addEventListener('click', removeAbility);
removeAbilityButton[1].addEventListener('click', removeAbility);
callAbilitiesAPI();

function transferabilitiesToCard () {
  var abilitiesFromSelect;
  var abilitiesParagraph = document.querySelectorAll('.skilltext');

  for (var i = 0; i < abilitiesParagraph.length; i++) {
    abilitiesFromSelect = document.createTextNode(abilitiesDropdown[i].value);
    abilitiesParagraph[i].innerHTML = '';
    abilitiesParagraph[i].appendChild(abilitiesFromSelect);
  }
}

for (var i = 0; abilitiesDropdown.length; i++) {
  abilitiesDropdown[i].addEventListener('change', transferabilitiesToCard);
}
