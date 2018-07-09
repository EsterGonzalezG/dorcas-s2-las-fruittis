'use strict';

var mailInput= document.querySelector('.fill__input-mail');
var phoneInput=document.querySelector('.fill__input-phone');
var linkedinInput= document.querySelector('.fill__input-linkedin');
var githubInput=document.querySelector('.fill__input-github');

function transferValueToHref(event) {
  var guiltyElement = event.currentTarget;
  var targetID = guiltyElement.getAttribute('data-donde');
  var fillHref = document.querySelector('#' + targetID);

  fillHref.href = fillHref.href + guiltyElement.value;
}

mailInput.addEventListener('change', transferValueToHref);
phoneInput.addEventListener('change', transferValueToHref);
linkedinInput.addEventListener('keyup', transferValueToHref);
githubInput.addEventListener('keyup', transferValueToHref);
