const darkthemeBtn = document.querySelector('.darktheme-btn');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const moon = document.querySelector('.darktheme-icon__moon');
const sun = document.querySelector('.darktheme-icon__sun');
const globalStyle = document.querySelector('[data-id ="global-page-style"]');
const themeFromStorage = localStorage.getItem('THEME');

const currentTheme = {
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

const changeTo = {
  dark: function () {
    body.style.backgroundColor = 'rgb(17, 17, 17)';
    footer.style.backgroundColor = 'black';
    sun.style.opacity = 0;
    moon.style.opacity = 1;
    if (
      localStorage.getItem('THEME') === '' ||
      localStorage.getItem('THEME') === 'LIGHT'
    ) {
      localStorage.setItem('THEME', 'DARK');
    }
    globalStyle.innerHTML =
      '.movies-card__heading { color: white;}' +
      '.content { color: orange;}' +
      '.team-modal { color: orange;}' +
      '.pagination { background-color: rgb(17, 17, 17);}' +
      '.modal-film {background-color: black;}' +
      '.name-film {color: white;}' +
      '.info-value {color: orange;}' +
      '.about-film-title {color: orange;}' +
      '.about-film-text {color: orange;}' +
      '.film-modal-btn {background-color: orange; }';
  },
  light: function () {
    body.style.backgroundColor = 'white';
    footer.style.backgroundColor = '#f7f7f7';
    moon.style.opacity = 0;
    sun.style.opacity = 1;
    localStorage.setItem('THEME', 'LIGHT');
    globalStyle.innerHTML =
      '.movies-card__heading { color: black;}' +
      '.content { color: #545454;}' +
      '.team-modal { color: #545454;}' +
      '.pagination { background-color: white;}' +
      '.modal-film {background-color: white;}' +
      '.name-film {color: black;}' +
      '.info-value {color: black;}' +
      '.about-film-title {color: black;}' +
      '.about-film-text {color: black;}' +
      '.film-modal-btn {background-color: white; }';
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

export function doChangeThemeBtnMarkup() {
  const themeBtnMarkup = `<button class="darktheme-btn">
        <svg class="darktheme-icon darktheme-icon__sun">
            <use href = "./images/icons.svg#icon-sun">
        </svg>
        <svg class="darktheme-icon darktheme-icon__moon">
            <use href="./images/icons.svg#icon-moon">
        </svg>
</button>`;
  return themeBtnMarkup;
}

export function addEvLisToThemeBtn() {
  darkthemeBtn.addEventListener('click', changeTheme);
}
