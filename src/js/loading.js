const iconList = document.querySelector('.icon-list');
const form = document.querySelector('.search-form');
const array = [...iconList.children];
function search(e) {
  e.preventDefault();
  array.forEach(icon => {
    icon.classList.remove(`is-hidden`);
    icon.classList.add(`animate__zoomIn`);
    let svgAr = icon.children;
    let svg = svgAr[0];
    console.log(svg);
    svg.classList.add(`animate__flash`);
    svg.classList.add(`animate__delay-5s`);
  });
  for (let i = 0; i < array.length; i++) {
    array[i].classList.add(`animate__delay-${i}s`);
  }
}
function blockSreen() {
  iconList.classList.add(`blockSreen`);
}

function unblockSreen() {
  iconList.classList.remove(`blockSreen`);
}

form.addEventListener('submit', search);
