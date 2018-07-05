'use strict';

var cardContainer = document.querySelector('.viewfinder');
var colorContainer = document.querySelectorAll('.dropdown__colorsgroups');
var radioRed = document.querySelector('.radio--red');
var radioGrey = document.querySelector('.radio--grey');
var radios = document.querySelectorAll('.radio');

function init() {
  for(var i = 0; i < colorContainer.length; i++) {
    radios[i].addEventListener('click', setStyles);
  }
}

function setStyles() {
  if (radioRed.checked) {
    cardContainer.className = 'viewfinder viewfinder--red' /*className remplaza el valor de la clase actual por esta*/
  } else if (radioGrey.checked) {
    cardContainer.className = 'viewfinder viewfinder--grey'
  } else {
    cardContainer.className = 'viewfinder viewfinder--blue'
  }
}

init();
