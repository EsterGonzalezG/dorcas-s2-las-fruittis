'use strict';

const buttonReset = document.querySelector('.viewfinder__button-reset');

const resetName = document.getElementById('element-name');
const resetJob = document.getElementById('element-job');
const resetPhoto = document.querySelector('.viewfinder__photo');
const resetMiniPhoto = document.querySelector('.fill__input--miniimg');
const resetColor2 = document.getElementById('viewfinder-id');
const resetFont = document.getElementById('viewfinder-id');
const resetTelefon = document.getElementById('element-phone');
const resetMail = document.getElementById('element-mail');
const resetLinkedin = document.getElementById('element-linkedin');
const resetGithub = document.getElementById('element-linkedin');
const resetAbility = document.querySelectorAll('.skilltext');
const resetCard = () => {
  resetName.innerHTML = 'Nombre Apellido';
  resetJob.innerHTML = 'Front-end developer';
  // las imagenes de la card y la pequeña del formulario
  resetPhoto.style.backgroundImage = 'url("/images/9505e9979cf27646de6a871110cde835.jpg")';
  resetMiniPhoto.style.backgroundImage = 'url("http://placehold.it/29x29/ffffff/ffffff") ';
  //  cambiar los colores
  resetColor2.classList.remove('viewfinder--blue', 'viewfinder--red', 'viewfinder--grey');
  resetColor2.classList.add('viewfinder--blue');
  // cambiar las Fuentes
  resetFont.classList.remove('comic', 'ubuntu', 'montserrat');
  resetFont.classList.add('comic');
  // cambiar iconos
  resetTelefon.href = '';
  resetMail.href = '';
  resetLinkedin.href = '';
  resetGithub.href = '';

  // cambiar Habilidades
  for (const ability of resetAbility) {
    ability.innerHTML = '';
  }
};

const resetForm = () => {
  document.querySelector('.main__form').reset();
  resetCard();
};



buttonReset.addEventListener('click', resetForm);
