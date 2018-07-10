'use strict';
var i;
var j;
var collapsible=document.querySelectorAll('.collapsible');
var collapsibleTriggers=document.querySelectorAll('.collapsible__label');



function updateCollapsibles(e) {
  var parent = e.currentTarget.parentElement;

  if (parent.classList.contains('collapsible--visible')) {
    parent.classList.remove('collapsible--visible');
  } else {
    closeAllCollapsibles();
    parent.classList.add('collapsible--visible');

  }
}

function closeAllCollapsibles() {
  for (i = 0; i < collapsible.length; i++) {
    collapsible[i].classList.remove('collapsible--visible');
  }
}

for (j = 0; j < collapsibleTriggers.length; j++) {
  collapsibleTriggers[j].addEventListener('click', updateCollapsibles);
}
