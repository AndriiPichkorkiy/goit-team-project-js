import refs from '/src/js/refs';
import * as iconSearch from '/src/images/icons.svg';
import {
  doChangeThemeBtnMarkup,
  addEvLisToThemeBtn,
  changeTo,
  currentTheme,
} from './dark-theme.js';

const activeHeader = document.querySelector('.js-active-header');
const logoPageHome = document.querySelector('.logo__name');
let mainPage = 'homePage';
const changeBtnMarkup = doChangeThemeBtnMarkup();

markupForm();

refs.home.classList.add('side-nav__link--current');
refs.logoLink.setAttribute('style', 'cursor:default');
logoPageHome.classList.add('reveal-text');

refs.home.addEventListener('click', e => {
  e.preventDefault();
  if (mainPage === 'homePage') return;

  markupPageHome();
  markupForm();
});

refs.library.addEventListener('click', e => {
  e.preventDefault();
  if (mainPage === 'libraryPage') return;
  markupPageLibrary();
  markupButtons();
});

refs.logoLink.addEventListener('click', e => {
  e.preventDefault();
  if (mainPage !== 'libraryPage') return;
  markupPageHome();
  markupForm();
});

function markupPageHome() {
  mainPage = 'homePage';
  refs.home.classList.add('side-nav__link--current');
  refs.library.classList.remove('side-nav__link--current');
  refs.header.classList.remove('header-bg-lib');
  refs.logoLink.setAttribute('style', 'cursor:default');
  logoPageHome.classList.add('reveal-text');
  logoPageHome.classList.remove('rise-text');
}

function markupPageLibrary() {
  mainPage = 'libraryPage';
  refs.library.classList.add('side-nav__link--current');
  refs.home.classList.remove('side-nav__link--current');
  refs.header.classList.add('header-bg-lib');
  refs.logoLink.setAttribute('style', 'cursor:pointer;');
  logoPageHome.classList.remove('reveal-text');
  logoPageHome.classList.add('rise-text');
}

function markupForm() {
  activeHeader.innerHTML =
    // <div class="form-and-changebtn">
    `<form class="search-form" data-id="searchForm">
            <input
              type="text"
              name="query"
              autocomplete="off"
              data-id="searchQuery"
              placeholder="Movie search"
              class="search-field"
            />
            <button type="submit" class="search-btn" data-id="searchBtn">
              <svg class="search-icon" width="12" height="12">
                <use href="${iconSearch}#icon-search"></use>
              </svg>
            </button>
          </form>`;
  // ${changeBtnMarkup}
  // </div>;
  // addEvLisToThemeBtn();
  // if (localStorage.getItem('THEME') === 'DARK') {
  //   changeTo.dark();
  //   currentTheme.changeToDark();
  // }
}

function markupButtons() {
  activeHeader.innerHTML = `<div class="buttons-wrapper"><button
            type="button"
            class="library__buttons library__button--active"
            data-id="watchedBtn"
          >
            Watched
          </button>
          <button type="button" class="library__buttons" data-id="queueBtn">
            Queue
          </button></div>`;
}
