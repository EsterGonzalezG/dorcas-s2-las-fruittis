'use strict';

//localStorage.removeItem('Card');
var localCard ={
  palette:1,
  typography:2,
  name:'',
  job:'',
  email:'',
  telefono:'',
  linkedin:'',
  github:'',
  photo:'',
  skills:[]
};
//var buttonChecked=[];
var buttonsColors=document.getElementsByName('colors');
var buttonsText=document.getElementsByName('fonts');
var imgInput = document.querySelector('#img-selector');
var fr = new FileReader();
var nameCard=document.querySelector('#element-name');
var jobCard=document.querySelector('#element-job');
var mailInputCard = document.querySelector('.fill__input-mail');
var phoneInputCard = document.querySelector('.fill__input-phone');
var linkedinInputCard = document.querySelector('.fill__input-linkedin');
var githubInputCard = document.querySelector('.fill__input-github');
var nameInputLocal=document.querySelector('.fill__input-name');
var jobInputLocal=document.querySelector('.fill__input-job');
var imageCard= document.querySelector('.viewfinder__photo');
var buttonImage=document.querySelector('.fill__input--addimgbutton');
//var stylo=imageCard.getPropertyValue('url');
var urlPhoto=(window.getComputedStyle(imageCard).getPropertyValue('background-image'));
var miniImage=document.querySelector('.fill__input--miniimg');
var emailInputLocal=document.querySelector('.fill__input-mail');
var telInputLocal=document.querySelector('.fill__input-phone');
var linkdinInputLocal=document.querySelector('.fill__input-linkedin');
var githubInputLocal=document.querySelector('.fill__input-github');
//buttonsColors.addEventListener('change',guardarRadios);
//buttonsText.addEventListener('change',guardarRadios);
nameInputLocal.addEventListener('keyup',guardarCardLocal);
jobInputLocal.addEventListener('keyup',guardarCardLocal);
emailInputLocal.addEventListener('keyup',guardarCardLocal);
telInputLocal.addEventListener('keyup',guardarCardLocal);
linkdinInputLocal.addEventListener('keyup',guardarCardLocal);
githubInputLocal.addEventListener('keyup',guardarCardLocal);
buttonImage.addEventListener('click',guardarCardLocal);
//Faltan por poner las Habilidades y la fotos

function guardarCardLocal() {
if (!localStorage.getItem('Card')) {
    localCard ={
      palette:1,
      typography:2,
      name:'',
      job:'',
      email:'',
      telefono:'',
      linkedin:'',
      github:'',
      photo:'',
      skills:[]
    };
  }else{
    localCard = JSON.parse(localStorage.getItem('Card'));
  }

  urlPhoto=(window.getComputedStyle(imageCard).getPropertyValue('background-image'));
  console.log(urlPhoto);
  localCard.palette=buttonsColors.value;/*ojo que hay que hacer el for para saber el value*/
  localCard.typography=buttonsText.value;/*ojo que hay que hacer el for para saber el value*/
  localCard.name = nameInputLocal.value;
  localCard.job = jobInputLocal.value;
  localCard.email=emailInputLocal.value;
  localCard.phone=telInputLocal.value;
  localCard.linkedin=linkdinInputLocal.value;
  localCard.github =githubInputLocal.value;
  localCard.photo = urlPhoto;/*mirar como conseguir la url*/
  localCard.email = emailInputLocal.value;
  localCard.phone = telInputLocal.value;
  localCard.linkedin = linkdinInputLocal.value;
  localCard.github = githubInputLocal.value;
  localStorage.setItem('Card', JSON.stringify(localCard));

}
function recuperarLocalCard() {
  localCard = JSON.parse(localStorage.getItem('Card'));
  nameCard.innerHTML=localCard.name;
  jobCard.innerHTML=localCard.job;
  nameInputLocal.value = localCard.name;
  jobInputLocal.value = localCard.job;
  imageCard.style.backgroundImage = "'url("+localCard.foto+")'";
  emailInputLocal.value=localCard.email;
  mailInputCard.href='mailto:'+localCard.email;
  emailInputLocal.value = localCard.email;
  phoneInputCard.href='tel: +34' +localCard.phone;
  telInputLocal.value = localCard.phone;
  linkedinInputCard.href='https://www.linkedin.com/in/' +localCard.linkedin;
  linkdinInputLocal.value = localCard.linkedin;
  githubInputCard.href='https://github.com/' +localCard.github;
  githubInputLocal.value = localCard.github;
  //profileImage.style.backgroundImage = localCard.foto;
  //miniBox.style.backgroundImage = localCard.foto;
  //profileImage.value = localCard.foto;

}
recuperarLocalCard();

// guardarRadios(){
// var button_value;
// for(var i = 0; i < buttonsColors.length; i++){
//     if(buttonsColors[i].checked){
//         button_value = buttonsColors[i].value;
//     }
// }
// localStorage.setItem('buttonRadioCard', JSON.stringify(buttonChecked));
// }
