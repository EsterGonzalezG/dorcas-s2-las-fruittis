'use strict';

var cardContainer = document.querySelector('.viewfinder');
var radiosGroup = document.querySelectorAll('.radiosGroup');
var radioRed = document.querySelector('.radio--red');
var radioGrey = document.querySelector('.radio--grey');
var radios = document.querySelectorAll('.radio');
var radioUbuntu = document.querySelector('.radio--ubuntu');
var radioComic = document.querySelector('.radio--comic');
var radioMontserrat = document.querySelector('.radio--montserrat');



function init() {
  for(var i = 0; i < radiosGroup.length; i++) {
    radios[i].addEventListener('click', setStyles);
  }
}

function setStyles() {
console.log('hi');
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
}

function resetColor() {
  cardContainer.classList.remove('viewfinder--red', 'viewfinder--grey', 'viewfinder--blue', 'comic', 'montserrat', 'ubuntu');
}

init();
