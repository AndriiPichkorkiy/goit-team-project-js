const darkthemeBtn = document.querySelector('.darktheme-btn');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const moon = document.querySelector('.darktheme-icon__moon');
const sun = document.querySelector('.darktheme-icon__sun');

const objTheme = {
  dark: 0,
  light: 1,
  changeToDark() {
    // const textArrey = document.querySelectorAll('.text');
    this.dark = 1;
    this.light = 0;
  },
  changeToLight() {
    // const textArrey = document.querySelectorAll('.text');
    this.light = 1;
    this.dark = 0;
  },
};

export function themeNow() {
  let theme;
  if (objTheme.dark === 1) return (theme = 0);
  return (theme = 1);
}
console.log(themeNow);

function dark() {
  const textArrey = document.querySelectorAll('.text');
  body.style.backgroundColor = 'rgba(0, 0, 0, 0.904)';
  footer.style.backgroundColor = 'black';
  textArrey.forEach(text => (text.style.color = 'white'));
  sun.style.opacity = 0;
  moon.style.opacity = 1;
}

function light() {
  const textArrey = document.querySelectorAll('.text');
  body.style.backgroundColor = 'white';
  footer.style.backgroundColor = '#f7f7f7';
  textArrey.forEach(text => (text.style.color = '#545454'));
  moon.style.opacity = 0;
  sun.style.opacity = 1;
}

function changeTheme() {
  if (objTheme.dark === 0) {
    dark();
    // body.classList.add('darktheme-body');
    setTimeout(() => {
      objTheme.changeToDark();
    }, 100);
  }
  if (objTheme.light === 0) {
    // body.classList.remove('darktheme-body');
    light();
    setTimeout(() => {
      objTheme.changeToLight();
    }, 100);
  }
}

darkthemeBtn.addEventListener('click', changeTheme);
