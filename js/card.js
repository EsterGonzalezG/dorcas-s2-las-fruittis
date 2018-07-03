'use strict';
var nameCard= document.querySelector('.viewfinder__card-title-name');
var nameInput=document.querySelector('.fill__input--items');

//con el keypress y una funcion
nameInput.addEventListener('change', mostrar);

function mostrar() {
  var escribir=nameInput.value;

  nameCard.innerHtml=escribir;
}
