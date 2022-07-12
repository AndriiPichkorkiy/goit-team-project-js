import * as anyNameThatYouWant from '../images/icons.svg';
import * as backgroundBody from '../images/bg-main/lenta-night.png';
import * as backgroundBodyLib from '../images/bg-main/lenta2-night.png';

const body = document.querySelector('body');
const footer = document.querySelector('footer');

const globalStyle = document.querySelector('[data-id ="global-page-style"]');

export const currentTheme = {
  dark: 0,
  light: 1,
  changeToDark() {
    this.dark = 1;
    this.light = 0;
  },
  changeToLight() {
    this.light = 1;
    this.dark = 0;
  },
};

export function doChangeThemeBtnMarkup() {
  const themeBtnMarkup = `<button class="darktheme-btn">
        <svg class="darktheme-icon darktheme-icon__sun">
            <use href = "${anyNameThatYouWant}#icon-sun">
        </svg>
        <svg class="darktheme-icon darktheme-icon__moon">
            <use href="${anyNameThatYouWant}#icon-moon">
        </svg>
      </button>`;
  return themeBtnMarkup;
}

const darkthemeBtn = document.querySelector('.darktheme-btn');
darkthemeBtn.addEventListener('click', changeTheme);

export const changeTo = {
  dark: function () {
    const moon = document.querySelector('.darktheme-icon__moon');
    const sun = document.querySelector('.darktheme-icon__sun');
    sun.style.opacity = 1;
    moon.style.opacity = 0;
    body.style.backgroundColor = 'rgb(17, 17, 17)';
    footer.style.backgroundColor = 'black';
    if (
      localStorage.getItem('THEME') === '' ||
      localStorage.getItem('THEME') === 'LIGHT'
    ) {
      localStorage.setItem('THEME', 'DARK');
    }
    globalStyle.innerHTML =
      '.movies-card__heading { transition: color; transition-duration: 500ms; color: white;}' +
      '.content { transition: color; transition-duration: 500ms; color: #ff6b08;}' +
      '.team-modal { transition: color; transition-duration: 500ms; color: #ff6b08;}' +
      '.pagination { transition: background-color; transition-duration: 500ms; background-color: rgb(17, 17, 17);}' +
      '.modal-film { background-color: black;}' +
      '.name-film { color: white;}' +
      '.info-value { color: #ff6b08;}' +
      '.about-film-title { color: #ff6b08;}' +
      '.about-film-text { color: #ff6b08;}' +
      '.film-modal-btn {background-color: #ff6b08; }' +
      '.content__title {color: black; }' +
      '.modal-film-close__btn {fill: white;}' +
      '.pagination__button {color:white;}' +
      '.pagination__dots {color:white;}' +
      `.background__main {background-image: url("${backgroundBody}"); background-position: center;
        background-repeat: repeat-y;
        background-size: contain;
        background-attachment: scroll, scroll;
        background-origin: padding-box, padding-box;
        background-clip: border-box, border-box;}` +
      `.background__main--lib {background-image: url("${backgroundBodyLib}"); background-position: center;
        background-repeat: no-repeat;
        background-attachment: scroll, scroll;
        background-origin: padding-box, padding-box;
        background-clip: border-box, border-box; }` +
      '.movies-filter__button {color:white; background-color:black;}' +
      '.modal-film-close__btn {fill: white;}';
  },
  light: function () {
    const moon = document.querySelector('.darktheme-icon__moon');
    const sun = document.querySelector('.darktheme-icon__sun');
    body.style.backgroundColor = 'white';
    footer.style.backgroundColor = '#f7f7f7';
    sun.style.opacity = 0;
    moon.style.opacity = 1;
    localStorage.setItem('THEME', 'LIGHT');
    globalStyle.innerHTML = '';
  },
};

if (localStorage.getItem('THEME') === 'DARK') {
  changeTo.dark();
  currentTheme.changeToDark();
}

function changeTheme() {
  if (currentTheme.dark === 0) {
    changeTo.dark();
    setTimeout(() => {
      currentTheme.changeToDark();
    }, 100);
  }
  if (currentTheme.light === 0) {
    changeTo.light();
    setTimeout(() => {
      currentTheme.changeToLight();
    }, 100);
  }
}
