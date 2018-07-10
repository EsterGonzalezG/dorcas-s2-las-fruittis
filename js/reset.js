'use strict';
var buttonReset= document.querySelector('.viewfinder__button-reset');
function resetForm (){
  document.getElementById('.fill__form--itemscontainer').reset();
}
function resetCard(){
  document.getElementAll('.viewfinder__card-titlebox').reset();
}

buttonReset.addEventListener('click', resetForm, resetCard);
