'use strict';

var fr = new FileReader();
var buttonImage=document.querySelector('.fill__input--addimgbutton');
var inputHidden=document.querySelector('#img-selector');
var imageCard= document.querySelector('.viewfinder__photo');
var miniImage=document.querySelector('.fill__input--miniimg');

function getImage(event) {
  var myFile = event.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  imageCard.style.backgroundImage= 'url('+ fr.result+')';
  miniImage.style.backgroundImage= 'url('+ fr.result+')';
}

function fakeFileClick() {
  inputHidden.click();
}

inputHidden.addEventListener('change', getImage);
buttonImage.addEventListener('click', fakeFileClick);
