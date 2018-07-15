'use strict';

var buttonCreateCard = document.querySelector('.shares__input--addimgbutton');
var buttonTwitter = document.querySelector('.shares__twitter');
var sharesUrl = document.querySelector('.shares__url');

function createUrlCard () {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      palette: 1,
      typography: 2,
      name: "María García",
      job: "Front-end developer",
      phone: "+34 666666666",
      email: "mariagar@example.com",
      linkedin: "mariagar",
      github: "mariagar",
      photo: "data:image/png;base64,2342ba...",
      skills: ["HTML", "Sass", "JavaScript"]
    })
  })
    .then(function(response){
      return response.json();
    })
    .then(function(data) {
      setCardUrl(data.cardURL);
    });
}

function setCardUrl(url) {
  sharesUrl.innerHTML = url;
  sharesUrl.href = url;
}

buttonCreateCard.addEventListener('click', createUrlCard);
