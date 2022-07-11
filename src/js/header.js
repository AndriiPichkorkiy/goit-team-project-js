import refs from '/src/js/refs';
import * as iconSearch from '/src/images/icons.svg';
import { activateHeadersBtn } from './myLibraryBtns';
import searchMovies from './search-form';
import { fetchPopularMovies, showPagination } from './pagination';
import {firstRunTranslator} from './translator';
import { librarySelection } from './nameLibrary';



const activeHeader = document.querySelector('.js-active-header');
const logoPageHome = document.querySelector('.logo__name');

//---Translator---
firstRunTranslator();
let library = librarySelection();
const {homeBtn, myLibraryBtn, checkInBtn, InputSearch} = library;
const homeBtnHeader = document.querySelector('[data-id="home"]');
const libraryBtnHeader = document.querySelector('[data-id="library"]');
const checkBtnHeader = document.querySelector('[data-id="auth"]');

homeBtnHeader.textContent =homeBtn;
libraryBtnHeader.textContent = myLibraryBtn;
checkBtnHeader.textContent = checkInBtn;

let mainPage = 'homePage';


markupForm();
// fetchPopularMovies();

refs.home.classList.add('side-nav__link--current');
refs.logoLink.setAttribute('style', 'cursor:default');
logoPageHome.classList.add('reveal-text');
refs.searchForm = document.querySelector('.search-form');
refs.searchForm.addEventListener('submit', searchMovies);

refs.home.addEventListener('click', e => {
  e.preventDefault();
  if (mainPage === 'homePage') return;

  markupPageHome();
  markupForm();

  refs.searchForm = document.querySelector('.search-form');
  refs.searchForm.addEventListener('submit', searchMovies);
  fetchPopularMovies();
  showPagination();
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
  fetchPopularMovies();
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
  activeHeader.innerHTML = `<form class="search-form" data-id="searchForm">
            <input
              type="text"
              name="query"
              autocomplete="off"
              data-id="searchQuery"
              placeholder="${InputSearch}"
              class="search-field"
            />
            <button type="submit" class="search-btn" data-id="searchBtn">
              <svg class="search-icon" width="12" height="12">
                <use href="${iconSearch}#icon-search"></use>
              </svg>
            </button>
          </form>`;
}

export function markupButtons() {
  activeHeader.innerHTML = `<div class="buttons-wrapper"><button
            type="button"
            class="library__buttons"
            data-id="watchedBtn"
          >
            Watched
          </button>
          <button type="button" class="library__buttons" data-id="queueBtn">
            Queue
          </button></div>`;
  activateHeadersBtn();
}
