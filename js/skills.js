'use strict';

const addAbilityButton = document.querySelector('.abilitiesbutton--plusjs');
const removeAbilityButton = document.querySelectorAll('.abilitiesbutton--minusjs');
const fillAbilityBox = document.querySelectorAll('.fill__ability--js');
const abilitiesDropdown = document.querySelectorAll('.abilitiesdropdown--js');


//Esta función crea los elementos "option" que van dentro del select


const createOptionForSelect = (text) => {
  const option = document.createElement('option');
  const optionText = document.createTextNode(text);
  option.appendChild(optionText);
  return option;
};


//Esta función llama al API y añade las habilidades a cada option

const callAbilitiesAPI = () => {
  const url = 'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json';
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const abilitiesList = json.skills;
      for (const elementA of abilitiesDropdown) {
        for (const elementB of abilitiesList) {
          const newSkillsOption = createOptionForSelect(elementB);
          elementA.appendChild(newSkillsOption);
        }
      }
    });
};


//Esta función hace que se añadan la segunda y tercera caja para seleccionar las skills

const addAbility = () => {
  const hiddenAbilityBox = document.querySelectorAll('.fill__ability--jshidden');

  if (hiddenAbilityBox.length === 2) {
    fillAbilityBox[1].classList.remove('fill__ability--jshidden');
  } else if (hiddenAbilityBox.length === 1) {
    fillAbilityBox[2].classList.remove('fill__ability--jshidden');
  }
};

//Esta función permite eliminar la segunda y tercera caja de skills

const removeAbility= (event) => {
  const parentBox = event.currentTarget.parentElement;
  parentBox.classList.add('fill__ability--jshidden');
}

//Las llamadas a las funciones anteriores mediante click

addAbilityButton.addEventListener('click', addAbility);
removeAbilityButton[0].addEventListener('click', removeAbility);
removeAbilityButton[1].addEventListener('click', removeAbility);
callAbilitiesAPI();

//De aquí hacia abajo va la función que hace que el valor seleccionado en los select con skills de "rellena" se transfiera al visor de la card, pero no funciona del todo bien...

const transferabilitiesToCard = () => {
  const abilitiesParagraph = document.querySelectorAll('.skilltext');

  for (const element of abilitiesParagraph) {
    const abilitiesFromSelect = document.createTextNode(element.value);
    element.innerHTML = '';
    element.appendChild(abilitiesFromSelect);
  }
};

for (const element of abilitiesDropdown) {
  element.addEventListener('change', transferabilitiesToCard);
}
