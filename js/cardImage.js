'use strict';

const fr = new FileReader();
const buttonImage = document.querySelector('.fill__input--addimgbutton');
const inputHidden = document.querySelector('#img-selector');
const imageCard = document.querySelector('.viewfinder__photo');
const miniImage = document.querySelector('.fill__input--miniimg');
let urlPhoto;

const getImage = (event) => {
  const myFile = event.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
};

const writeImage = () => {
  urlPhoto = 'url(' + fr.result + ')';
  imageCard.style.backgroundImage = urlPhoto;
  miniImage.style.backgroundImage = urlPhoto;
  // guardarCardLocal();
};

const fakeFileClick = () => {
  inputHidden.click();
};

inputHidden.addEventListener('change', getImage);
buttonImage.addEventListener('click', fakeFileClick);
