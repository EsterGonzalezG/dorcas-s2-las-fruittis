'use strict';

var addAbilityButton = document.querySelector('.abilitiesbutton--plusjs');
var removeAbilityButton = document.querySelectorAll('.abilitiesbutton--minusjs');
var fillAbilityBox = document.querySelectorAll('.fill__ability--js');
var abilitiesDropdown = document.querySelectorAll('.abilitiesdropdown--js');

//Esta función crea los elementos "option" que van dentro del select

function createOptionForSelect(text) {
  var option = document.createElement('option');
  var optionText = document.createTextNode(text);
  option.appendChild(optionText);
  return option;
}

//Esta función llama al API y añade las habilidades a cada option

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

//Esta función hace que se añadan la segunda y tercera caja para seleccionar las skills

function addAbility() {
  var hiddenAbilityBox = document.querySelectorAll('.fill__ability--jshidden');

  if (hiddenAbilityBox.length === 2) {
    fillAbilityBox[1].classList.remove('fill__ability--jshidden');
  } else if (hiddenAbilityBox.length === 1) {
    fillAbilityBox[2].classList.remove('fill__ability--jshidden');
  }
}

//Esta función permite eliminar la segunda y tercera caja de skills

function removeAbility(event) {
  var parentBox = event.currentTarget.parentElement;
  parentBox.classList.add('fill__ability--jshidden');
}

//Las llamadas a las funciones anteriores mediante click

addAbilityButton.addEventListener('click', addAbility);
removeAbilityButton[0].addEventListener('click', removeAbility);
removeAbilityButton[1].addEventListener('click', removeAbility);
callAbilitiesAPI();

//De aquí hacia abajo va la función que hace que el valor seleccionado en los select con skills de "rellena" se transfiera al visor de la card, pero no funciona del todo bien...

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
