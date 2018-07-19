'use strict';

const collapsible = document.querySelectorAll('.collapsible');
const collapsibleTriggers = document.querySelectorAll('.collapsible__label');

for (const trigger of collapsibleTriggers) {
  trigger.addEventListener('click', (evento) => {
    const parent = evento.currentTarget.parentElement;

    if (parent.classList.contains('collapsible--visible')) {
      parent.classList.remove('collapsible--visible');
    } else {
      closeAllCollapsibles();
      parent.classList.add('collapsible--visible');
    }
  });
}

const closeAllCollapsibles = () =>{
  for (const close of collapsible){
    close.parentElement.classList.remove('collapsible--visible');
  }
};
