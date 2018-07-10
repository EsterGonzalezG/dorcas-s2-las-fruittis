'use strict';

var mailInput = document.querySelector('.fill__input-mail');
var phoneInput = document.querySelector('.fill__input-phone');
var linkedinInput = document.querySelector('.fill__input-linkedin');
var githubInput = document.querySelector('.fill__input-github');

function transferValueToHref(event) {
  var guiltyElement = event.currentTarget;
  var targetID = guiltyElement.getAttribute('data-donde');
  var fillHref = document.querySelector('#' + targetID);

  if (guiltyElement.classList.contains('fill__input-mail')) {
    fillHref.href = 'mailto:' + guiltyElement.value;
  } else if (guiltyElement.classList.contains('fill__input-phone')){
    fillHref.href = 'tel: +34' + guiltyElement.value;
  } else if (guiltyElement.classList.contains('fill__input-linkedin')) {
    fillHref.href = 'https://www.linkedin.com/in/' + guiltyElement.value;
  } else {
    fillHref.href = 'https://github.com/' + guiltyElement.value;
  }
}

mailInput.addEventListener('keyup', transferValueToHref);
phoneInput.addEventListener('keyup', transferValueToHref);
linkedinInput.addEventListener('keyup', transferValueToHref);
githubInput.addEventListener('keyup', transferValueToHref);
