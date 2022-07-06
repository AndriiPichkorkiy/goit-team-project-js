const darkthemeBtn = document.querySelector('.darktheme-btn');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const moon = document.querySelector('.darktheme-icon__moon');
const sun = document.querySelector('.darktheme-icon__sun');
const globalStyle = document.querySelector('[data-id ="global-page-style"]');

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

function dark() {
  body.style.backgroundColor = 'rgba(0, 0, 0, 0.904)';
  footer.style.backgroundColor = 'black';
  sun.style.opacity = 0;
  moon.style.opacity = 1;
  globalStyle.innerHTML =
    '.movies-card__heading { color: white;}' +
    '.content { color: white;}' +
    '.team-modal { color: white;}';
}

function light() {
  body.style.backgroundColor = 'white';
  footer.style.backgroundColor = '#f7f7f7';
  moon.style.opacity = 0;
  sun.style.opacity = 1;
  globalStyle.innerHTML =
    '.movies-card__heading { color: black;}' +
    '.content { color: #545454;}' +
    '.team-modal { color: #545454;}';
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
