import refs from './refs';

console.log(refs.future);
console.log(refs.popular);
console.log(refs.rating);

const filterButtons = document.querySelector('.movies-filter__list');

filterButtons.addEventListener('click', onFilterButtonClick);

function onFilterButtonClick(event) {}
