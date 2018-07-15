'use strict';
//localStorage.removeItem('Card');
var localCard ={
  nombre:'',
  puesto:'',
  //foto:'',
  email:'',
  telefono:'',
  linkedin:'',
  github:'',
  habilidades1:'',
  habilidade2:'',
  habilidade3:''
};
var buttonChecked=[];
var buttonsColors=document.getElementsByName('colors');
var buttonsText=document.getElementsByName('fonts');
buttonsColors.addEventListener('change',guardarRadios);
buttonsText.addEventListener('change',guardarRadios);



var nameCard=document.querySelector('#element-name');
var jobCard=document.querySelector('#element-job');

var mailInputCard = document.querySelector('.fill__input-mail');
var phoneInputCard = document.querySelector('.fill__input-phone');
var linkedinInputCard = document.querySelector('.fill__input-linkedin');
var githubInputCard = document.querySelector('.fill__input-github');





var nameInputLocal=document.querySelector('.fill__input-name');
var jobInputLocal=document.querySelector('.fill__input-job');
var imageCard= document.querySelector('.viewfinder__photo');
var miniImage=document.querySelector('.fill__input--miniimg');
var emailInputLocal=document.querySelector('.fill__input-mail');
var telInputLocal=document.querySelector('.fill__input-phone');
var linkdinInputLocal=document.querySelector('.fill__input-linkedin');
var githubInputLocal=document.querySelector('.fill__input-github');

nameInputLocal.addEventListener('keyup',guardarCardLocal);
jobInputLocal.addEventListener('keyup',guardarCardLocal);
emailInputLocal.addEventListener('keyup',guardarCardLocal);
telInputLocal.addEventListener('keyup',guardarCardLocal);
linkdinInputLocal.addEventListener('keyup',guardarCardLocal);
githubInputLocal.addEventListener('keyup',guardarCardLocal);
//Faltan por poner las Habilidades y la fotos

function guardarCardLocal() {
if (!localStorage.getItem('Card')) {
    localCard ={
      nombre:'',
      puesto:'',
      //foto:'',
      email:'',
      telefono:'',
      linkedin:'',
      github:'',
      //habilidades1:'',
      //habilidade2:'',
      //habilidade3:''
    };
  }else{
    localCard = JSON.parse(localStorage.getItem('Card'));
  }
  //localCard.colorText = null;
  //localCard.fuente = null;
  localCard.nombre = nameInputLocal.value;
  localCard.puesto = jobInputLocal.value;
  localCard.email=emailInputLocal.value;
  localCard.telefono=telInputLocal.value;
  localCard.linkedin=linkdinInputLocal.value;
  localCard.github =githubInputLocal.value;
  //localCard.foto = fotoURL;
  localCard.email = emailInputLocal.value;
  localCard.telefono = telInputLocal.value;
  localCard.linkedin = linkdinInputLocal.value;
  localCard.github = githubInputLocal.value;
  //localCard.habilidade1 = null;
//  localCard.habilidade2 = null;
  //localCard.habilidade3 = null;
  localStorage.setItem('Card', JSON.stringify(localCard));

}
function recuperarLocalCard() {
  localCard = JSON.parse(localStorage.getItem('Card'));
  nameCard.innerHTML=localCard.nombre;
  jobCard.innerHTML=localCard.puesto;
  nameInputLocal.value = localCard.nombre;
  jobInputLocal.value = localCard.puesto;
  emailInputLocal.value=localCard.email;
  mailInputCard.href='mailto:'+localCard.email;
  emailInputLocal.value = localCard.email;
  phoneInputCard.href='tel: +34' +localCard.telefono;
  telInputLocal.value = localCard.telefono;
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
