'use strict';

var photoFileReader = new FileReader();
var buttonCreateCard = document.querySelector('.shares__input--addimgbutton');
var buttonTwitter = document.querySelector('.shares__twitter');
var sharesUrl = document.querySelector('.shares__url');
var loader = document.querySelector('.loader');
var shares = document.querySelector('.shares');
var cardForm = document.querySelector('.main__form');
var nameForm = document.querySelector('.fill__input-name');
var jobForm = document.querySelector('.fill__input-job');
var phoneForm = document.querySelector('.fill__input-phone');
var emailForm = document.querySelector('.fill__input-mail');
var linkedinForm = document.querySelector('.fill__input-linkedin');
var githubForm = document.querySelector('.fill__input-github');
var photoForm = document.querySelector('.action__hiddenField');


function createUrlCard () {
  loader.classList.remove('hidden');
  shares.classList.add('hidden');
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      palette: getPaletteValue(),
      typography: getTypographyValue(),
      name: nameForm.value,
      job: jobForm.value,
      phone: phoneForm.value,
      email: emailForm.value,
      linkedin: linkedinForm.value,
      github: githubForm.value,
      photo: photoFileReader.result,
      skills: ['HTML', 'Sass', 'JavaScript'],
    })
  })
    .then(function(response){
      return response.json();
    })
    .then(function(data) {
      loader.classList.add('hidden');
      setCardUrl(data.cardURL);
      shareUrlTwitter(data.cardURL);
    });
}

function getPaletteValue() {
  var value;
  var palettes = document.querySelectorAll('input[name="palette"]');
  for(var i = 0; i < palettes.length; i++) {
    if (palettes[i].checked) {
      value = palettes[i].value;
    }
  }
  return parseInt(value);
}

function getTypographyValue() {
  var value;
  var typography = document.querySelectorAll('input[name="typography"]');
  for(var i = 0; i < typography.length; i++) {
    if (typography[i].checked) {
      value = typography[i].value;
    }
  }
  return parseInt(value);
}

function setCardUrl(url) {
  sharesUrl.innerHTML = url;
  sharesUrl.href = url;
  shares.classList.remove('hidden');
}

function fillPhotoFileReader (event) {
  var myFile = event.currentTarget.files[0];
  photoFileReader.readAsDataURL(myFile);
}

function shareUrlTwitter(url) {
  buttonTwitter.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=Acabo de crear mi tarjeta&hashtags=WomenInTech';
}

photoForm.addEventListener('change', fillPhotoFileReader);
buttonCreateCard.addEventListener('click', createUrlCard);
