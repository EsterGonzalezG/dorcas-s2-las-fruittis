'use strict';
const cardContainer = document.querySelector('.viewfinder');
const radioRed = document.querySelector('.radio--red');
const radioGrey = document.querySelector('.radio--grey');
const radios = document.querySelectorAll('.radio');
const radioComic = document.querySelector('.radio--comic');
const radioMontserrat = document.querySelector('.radio--montserrat');
const init = () => {
  for(const element of radios) {
    element.addEventListener('click', setStyles);
  }
};
const setStyles = () => {
  resetColor();
  if (radioRed.checked) {
    cardContainer.classList.add('viewfinder--red');
  } else if (radioGrey.checked) {
    cardContainer.classList.add('viewfinder--grey');
  } else {
    cardContainer.classList.add('viewfinder--blue');
  }
  if (radioComic.checked) {
    cardContainer.classList.add('comic');
  } else if (radioMontserrat.checked) {
    cardContainer.classList.add('montserrat');
  } else {
    cardContainer.classList.add('ubuntu');
  }
};
const resetColor = () => {
  cardContainer.classList.remove('viewfinder--red', 'viewfinder--grey', 'viewfinder--blue', 'comic', 'montserrat', 'ubuntu');
};
init();
