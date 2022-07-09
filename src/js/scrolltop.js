import { set, throttle } from 'lodash';

const btn = document.querySelector('.scrolltop__btn');
window.addEventListener('scroll', throttle(onScroll, 200));

function onScroll() {
  const minimumPxToScroll = 200;
  if (window.scrollY > minimumPxToScroll) {
    btn.classList.add(`transitionBtn`);
    btn.classList.remove(`is-hidden-button`);
    btn.classList.add('animate__animated');
    btn.classList.add('animate__bounce');
  }
  if (window.scrollY < minimumPxToScroll) {
    btn.classList.add(`is-hidden-button`);
    btn.classList.remove('animate__animated');
    btn.classList.remove('animate__bounce');
  }
}

function toTop(e) {
  e.preventDefault();
  window.scrollTo(0, 0);
}

btn.addEventListener('click', toTop);
