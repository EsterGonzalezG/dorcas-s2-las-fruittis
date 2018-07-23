'use strict';

const photoFileReader = new FileReader();
const buttonCreateCard = document.querySelector('.shares__input--addimgbutton');
const buttonTwitter = document.querySelector('.shares__twitter');
const sharesUrl = document.querySelector('.shares__url');
const loader = document.querySelector('.loader');
const shares = document.querySelector('.shares');
const nameForm = document.querySelector('.fill__input-name');
const jobForm = document.querySelector('.fill__input-job');
const phoneForm = document.querySelector('.fill__input-phone');
const emailForm = document.querySelector('.fill__input-mail');
const linkedinForm = document.querySelector('.fill__input-linkedin');
const githubForm = document.querySelector('.fill__input-github');
const photoForm = document.querySelector('.action__hiddenField');

const getPaletteValue = () => {
  const palettes = document.querySelectorAll('input[name="palette"]');
  let value;
  for (const element of palettes) {
    if (element.checked) {
      value = element.value;
    }
  }
  return parseInt(value);
};

const getTypographyValue = () => {
  let value;
  let typography = document.querySelectorAll('input[name="typography"]');
  for (const element of typography) {
    if (element.checked) {
      value = element.value;
    }
  }
  return parseInt(value);
};

const getSkillsValue = () => {
  let value = [];
  let skills = document.querySelectorAll('.fill__ability--js:not(.fill__ability--jshidden) select');
  for ( const element of skills) {
    value.push(element.value);
  }
  return value;
};

const setCardUrl = (url) => {
  sharesUrl.innerHTML = url;
  sharesUrl.href = url;
  shares.classList.remove('hidden');
};

const fillPhotoFileReader = (event) => {
  let myFile = event.currentTarget.files[0];
  photoFileReader.readAsDataURL(myFile);
};

const shareUrlTwitter = (url) => {
  buttonTwitter.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=Acabo de crear mi tarjeta&hashtags=WomenInTech';
};

const createUrlCard = () => {
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
      skills: getSkillsValue(),
    })
  })
    .then((response) => response.json())
    .then((json) => {
      loader.classList.add('hidden');
      setCardUrl(json.cardURL);
      shareUrlTwitter(json.cardURL);
    });
};

photoForm.addEventListener('change', fillPhotoFileReader);
buttonCreateCard.addEventListener('click', createUrlCard);
