const btn = document.querySelector('.scrolltop__btn');

window.onscroll = () => {
  if (window.scrollY > 200) {
    btn.classList.remove(`is-hidden-button`);
    // btn.classList.add('animate__delay-1s');
    btn.classList.add('animate__bounce');
  }
  if (window.scrollY < 200) {
    btn.classList.add(`is-hidden-button`);
    btn.classList.remove('animate__bounce');
    // btn.classList.remove('animate__delay-1s');
  }
};

function toTop(e) {
  e.preventDefault();
  window.scrollTo(0, 0);
}

btn.addEventListener('click', toTop);
