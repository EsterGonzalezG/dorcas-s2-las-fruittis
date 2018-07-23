'use strict';

const mailInput = document.querySelector('.fill__input-mail');
const phoneInput = document.querySelector('.fill__input-phone');
const linkedinInput = document.querySelector('.fill__input-linkedin');
const githubInput = document.querySelector('.fill__input-github');

const transferValueToHref = (event) => {
  const guiltyElement = event.currentTarget;
  const targetID = guiltyElement.getAttribute('data-donde');
  const fillHref = document.querySelector('#' + targetID);

  if (guiltyElement.classList.contains('fill__input-mail')) {
    fillHref.href = 'mailto:' + guiltyElement.value;
  } else if (guiltyElement.classList.contains('fill__input-phone')) {
    fillHref.href = 'tel: +34' + guiltyElement.value;
  } else if (guiltyElement.classList.contains('fill__input-linkedin')) {
    fillHref.href = 'https://www.linkedin.com/in/' + guiltyElement.value;
  } else {
    fillHref.href = 'https://github.com/' + guiltyElement.value;
  }
};

mailInput.addEventListener('keyup', transferValueToHref);
phoneInput.addEventListener('keyup', transferValueToHref);
linkedinInput.addEventListener('keyup', transferValueToHref);
githubInput.addEventListener('keyup', transferValueToHref);
