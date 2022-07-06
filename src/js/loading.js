const iconList = document.querySelector('.icon-list');
const form = document.querySelector('.search-form');
const array = [...iconList.children];
function animationWhenSearch(e) {
  e.preventDefault();
  array.forEach(icon => {
    icon.classList.remove(`is-hidden`);
    icon.classList.add(`animate__zoomIn`);
    let svgAr = icon.children;
    let svg = svgAr[0];
    svg.classList.add(`animate__flash`);
    svg.classList.add(`animate__delay-5s`);
  });
  for (let i = 0; i < array.length; i++) {
    array[i].classList.add(`animate__delay-${i}s`);
  }
}
export function blockSreen() {
  iconList.classList.add(`blockSreen`);
}

export function unblockSreen() {
  if (iconList.classList.contains(`blockSreen`)) {
    iconList.classList.remove(`blockSreen`);
  }
  array.forEach(icon => {
    icon.classList.add(`is-hidden`);
    icon.classList.remove(`animate__zoomIn`);
    let svgAr = icon.children;
    let svg = svgAr[0];
    svg.classList.remove(`animate__flash`);
    svg.classList.remove(`animate__delay-5s`);
  });
  for (let i = 0; i < array.length; i++) {
    array[i].classList.remove(`animate__delay-${i}s`);
  }
}

form.addEventListener('submit', animationWhenSearch);
