'use strict';

var buttonReset= document.querySelector('.viewfinder__button-reset');

var resetName = document.getElementById('element-name');
var resetJob = document.getElementById('element-job');
var resetPhoto =document.querySelector('.viewfinder__photo');
var resetMiniPhoto = document.querySelector('.fill__input--miniimg');
var resetColor2=document.getElementById('viewfinder-id');
var resetFont = document.getElementById('viewfinder-id');
var resetTelefon= document.getElementById('element-phone');
var resetMail= document.getElementById('element-mail');
var resetLinkedin = document.getElementById('element-linkedin');
var resetGithub = document.getElementById('element-linkedin');
var resetAbility= document.querySelectorAll('.skilltext');


function resetForm() {
  document.querySelector('.main__form').reset();
  resetCard();
}

function resetCard() {
  resetName.innerHTML='Nombre Apellido';
  resetJob.innerHTML='Front-end developer';
  // las imagenes de la card y la pequeña del formulario
  resetPhoto.style.backgroundImage = 'url("/images/fruittis.jpg")';
  resetMiniPhoto.style.backgroundImage= 'url("http://placehold.it/29x29/ffffff/ffffff") ';
  //  cambiar los colores
  resetColor2.classList.remove('viewfinder--blue', 'viewfinder--red', 'viewfinder--grey');
  resetColor2.classList.add('viewfinder--blue');
  // cambiar las Fuentes
  resetFont.classList.remove('comic', 'ubuntu', 'montserrat');
  resetFont.classList.add('comic');
  // cambiar iconos
  resetTelefon.href= '';
  resetMail.href = '';
  resetLinkedin.href= '';
  resetGithub.href= '';
  // cambiar Habilidades
  for (var i = 0; i < resetAbility.length; i++) {
    resetAbility[i].innerHTML= '';
  }
}

buttonReset.addEventListener('click', resetForm);
