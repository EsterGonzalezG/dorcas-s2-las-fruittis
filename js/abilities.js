'use strict';
//userSelections para recoger en un array las selecciones del usuario
var userSelections = [];

//variables para eliminar los select
var parentDiv;
var parentSelect;

//función para crear y añadir contenido al html
function addContentToHtml() {
  //Apuntar al padre de Select, el div
  var parentDivSelect = document.querySelector('.js__select-container');

  //Declaraciones de variables de select y su contenido
  var newParentSelect = document.createElement('div');
  var newSelect = document.createElement('select');
  var newOption = document.createElement('option');
  var optionContent = document.createTextNode('HTML');

  //Declaraciones variables boton más div que lo contiene

  var newSelectButton = document.createElement('div');
  var newSelectButtonContent = document.createElement('i');

  //Bucle que recorre el array de userSelections (+ 1 para que aparezca 1 ya pintado al cargar la página) y añade los grupos de contenido
  for (var i = 0; i < userSelections.length + 1; i++) {
    //Insercion contenido en option, e insercion de option como contenido de select. Insercion de select dentro del div que es su padre
    newOption.appendChild(optionContent);
    newSelect.appendChild(newOption);
    newParentSelect.appendChild(newSelect);
    parentDivSelect.appendChild(newParentSelect);

    newParentSelect.classList.add('item__select-container');
    newSelect.classList.add('item__select');
    newOption.classList.add('js__option');

    //Insercion clase font-awesome en <i>, insercion <i> en <div>
    newSelectButtonContent.classList.add('fas');
    newSelectButtonContent.classList.add('fa-plus');
    newSelectButtonContent.classList.add('js__add');
    newSelectButton.appendChild(newSelectButtonContent);
    newSelectButton.classList.add('item__select-button');
    newParentSelect.appendChild(newSelectButton);
  }

  changeButton();
}

//función para cambiar el signo del botón dependiendo de las seleciones del usuario
function changeButton() {
  var button = document.querySelectorAll('.js__add');
  for (var i = 0; i < button.length; i++) {
    console.log('i = ' + i);

    if (userSelections.length === i) {
      button[i].classList.add('fa-plus');
      button[i].removeEventListener('click', removeSelect);
      button[i].addEventListener('click', addSelect);
    } else {
      button[i].classList.remove('fa-plus');
      button[i].classList.add('fa-minus');
      button[i].removeEventListener('click', addSelect);
      button[i].addEventListener('click', removeSelect);
    }
  }
  conectSelectWithCard();
}

//Llamada a la función que crea el contenido la primera vez
addContentToHtml();

//Función para añadir el contenido (hasta que las selecciones del usuario sean 3) y cambiar el signo del último botón
function addSelect(event) {
  console.log('estoy poniendo');

  var clickedElement = event.currentTarget;
  userSelections.push('option');
  console.log(userSelections);
  if (userSelections.length < 3) {
    addContentToHtml();
  } else if (userSelections.length === 3) {
    changeButton();
  }
}

//Función para quitar el contenido (de momento sólo quita el primer campo no el correspondiente al botón que se pincha)
function removeSelect() {
  console.log('estoy quitando');
  parentDiv = document.querySelector('.js__select-container');
  parentSelect = document.querySelector('.item__select-container');
  userSelections.splice(0, 1);
  console.log(userSelections);
  if (userSelections.length === 2) {
    changeButton();
  } else if (userSelections.length === 1) {
    parentDiv.removeChild(parentSelect);
    changeButton();
  } else if (userSelections.length === 0) {
    parentDiv.removeChild(parentSelect);
    changeButton();
  }
}
