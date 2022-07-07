const darkthemeBtn = document.querySelector('.darktheme-btn');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const moon = document.querySelector('.darktheme-icon__moon');
const sun = document.querySelector('.darktheme-icon__sun');
const globalStyle = document.querySelector('[data-id ="global-page-style"]');
const themeFromStorage = localStorage.getItem('THEME');

const objTheme = {
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

if (localStorage.getItem('THEME') === 'DARK') {
  dark();
  objTheme.changeToDark();
}

function dark() {
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
}

function light() {
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
}

function changeTheme() {
  if (objTheme.dark === 0) {
    dark();
    setTimeout(() => {
      objTheme.changeToDark();
    }, 100);
  }
  if (objTheme.light === 0) {
    light();
    setTimeout(() => {
      objTheme.changeToLight();
    }, 100);
  }
}

darkthemeBtn.addEventListener('click', changeTheme);
