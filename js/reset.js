'use strict';

var buttonReset= document.querySelector('.viewfinder__button-reset');
var resetName = document.getElementById('element-name');
var resetJob = document.getElementById('element-job');
var resetPhoto =document.querySelector('.viewfinder__photo');
var resetMiniPhoto = document.querySelector('.fill__input--miniimg');
var resetColor2=document.getElementById('viewfinder');
var resetFont = document.getElementById('viewfinder');


function resetForm() {
  document.getElementById('fill__form--itemscontainer').reset();
  resetCard();
}

function resetCard() {
  resetName.innerHTML='Nombre Apellido';
  resetJob.innerHTML='Front-end developer';
  // las imagenes de la card y la pequeña del formulario
  resetPhoto.style.backgroundImage = 'url("https://place-hold.it/240x200/red")';
  resetMiniPhoto.innerHTML = ' ';
  //  cambiar los colores
  resetColor2.classList.remove('viewfinder--blue', 'viewfinder--red', 'viewfinder--grey');
  resetColor2.classList.add('viewfinder--blue');
  // cambiar las Fuentes
  resetFont.classList.remove('comic', 'ubuntu', 'montserrat');
  resetFont.classList.add('comic');
}

buttonReset.addEventListener('click', resetForm);
