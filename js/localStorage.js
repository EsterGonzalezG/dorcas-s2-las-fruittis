'use strict';

//localStorage.removeItem('Card');
var localCard ={
  palette:'',
  typography:'',
  name:'',
  job:'',
  email:'',
  phone:'',
  linkedin:'',
  github:'',
  photo:'',
  skills:[]
};
var bottonColors;
var buttonsColors=document.getElementsByName('colors');
var buttonsText=document.getElementsByName('fonts');
var fr = new FileReader();
var nameCard=document.querySelector('#element-name');
var jobCard=document.querySelector('#element-job');

var nameInputLocal=document.querySelector('.fill__input-name');
var jobInputLocal=document.querySelector('.fill__input-job');

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

//Faltan por poner las Habilidades y los button radio

function guardarCardLocal() {
if (!localStorage.getItem('Card')) {
    localCard ={
      palette:'',
      typography:'',
      name:'',
      job:'',
      email:'',
      phone:'',
      linkedin:'',
      github:'',
      photo:'',
      skills:[]
    };
  }else{
    localCard = JSON.parse(localStorage.getItem('Card'));
  }

  localCard.palette=value;
  localCard.typography=buttonsText.value;/*ojo que hay que hacer el for para saber el value*/
  localCard.name = nameInputLocal.value;
  localCard.job = jobInputLocal.value;
  localCard.email=emailInputLocal.value;
  localCard.phone=telInputLocal.value;
  localCard.linkedin=linkdinInputLocal.value;
  localCard.github =githubInputLocal.value;
  localCard.photo = urlPhoto;/*mirar como conseguir la url*/
  localCard.phonoMini=miniPhoto;
  localCard.email = emailInputLocal.value;
  localCard.phone = telInputLocal.value;
  localCard.linkedin = linkdinInputLocal.value;
  localCard.github = githubInputLocal.value;
  localStorage.setItem('Card', JSON.stringify(localCard));

}
function recuperarLocalCard() {
  localCard = JSON.parse(localStorage.getItem('Card'));
  recuperarButton();

  nameCard.innerHTML=localCard.name;
  jobCard.innerHTML=localCard.job;
  nameInputLocal.value = localCard.name;
  jobInputLocal.value = localCard.job;
  imageCard.style.backgroundImage =localCard.photo;

  miniImage.style.backgroundImage=localCard.phonoMini;
  emailInputLocal.value=localCard.email;
  document.querySelector('.fill__input-mail').href='mailto:' +localCard.email;

  emailInputLocal.value = localCard.email;
  document.querySelector('.fill__input-phone').href='tel: +34' +localCard.phone;

  telInputLocal.value = localCard.phone;
  document.querySelector('.fill__input-linkedin').href='https://www.linkedin.com/in/' +localCard.linkedin;
  linkdinInputLocal.value = localCard.linkedin;
  document.querySelector('.fill__input-github').href='https://github.com/' +localCard.github;
  githubInputLocal.value = localCard.github;


}
recuperarLocalCard();


var radiosG = document.querySelectorAll('.radiosGroup');
var rad = document.querySelectorAll('.radio');
var value;
for(var i = 0; i < radiosG.length; i++) {
  rad[i].addEventListener('change', valorButonRadio);
}
function valorButonRadio() {

  //bottonColors=getPaletteValue();
  //console.log(bottonColors);
  for(var i = 0; i < rad.length; i++) {
    if (rad[i].checked) {
      value = rad[i].value;
      break;
    }
  }
  guardarCardLocal();
}
function recuperarButton() {

var butonpaleta=parseInt(localCard.palette);
  if(butonpaleta===1){
    document.getElementById('blue').click();
  }else if(butonpaleta===2){
    document.getElementById('red').click();
  }else if (butonpaleta===3){
    document.getElementById('grey').click();
  }
}
