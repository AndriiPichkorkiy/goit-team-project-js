import refs from '/src/js/refs';
import * as iconSearch from '../images/icons.svg';

import { activateHeadersBtn } from './myLibraryBtns';
import searchMovies from './search-form';
import { FireBaseApi } from './fireBaseApi';
import {
  fetchPopularMovies,
  showPagination,
  removePagination,
} from './pagination';
import { hideFilters, showFilters } from './filter-buttons';

const activeHeader = document.querySelector('.js-active-header');
const logoPageHome = document.querySelector('.logo__name');
const backgroundMain = document.querySelector('.background__main');
const logoIcon = document.querySelector('.logo__icon');

let mainPage = 'homePage';

markupForm();

refs.home.classList.add('side-nav__link--current');
refs.logoLink.setAttribute('style', 'cursor:default');
logoPageHome.classList.add('reveal-text');
logoIcon.setAttribute('style', 'stroke: #ffffff');
backgroundMain.classList.remove('background__main--lib');

refs.searchForm = document.querySelector('.search-form');
refs.searchForm.addEventListener('submit', searchMovies);

function fetchMoviesPagination() {
  fetchPopularMovies();
  //   showPagination();
}

refs.home.addEventListener('click', e => {
  e.preventDefault();
  removePagination();
  showFilters();
  if (mainPage === 'homePage') return;

  markupPageHome();
  markupForm();

  refs.searchForm = document.querySelector('.search-form');
  refs.searchForm.addEventListener('submit', searchMovies);

  fetchMoviesPagination();
});

refs.library.addEventListener('click', e => {
  e.preventDefault();
  removePagination();
  hideFilters();
  if (mainPage === 'libraryPage') return;

  markupPageLibrary();
  markupButtons();
});

refs.logoLink.addEventListener('click', e => {
  e.preventDefault();
  showFilters();
  if (mainPage !== 'libraryPage') return;

  markupPageHome();
  markupForm();
  fetchMoviesPagination();
});

function markupPageHome() {
  mainPage = 'homePage';
  refs.home.classList.add('side-nav__link--current');
  refs.library.classList.remove('side-nav__link--current');
  refs.header.classList.remove('header-bg-lib');
  refs.logoLink.setAttribute('style', 'cursor:default');
  logoIcon.setAttribute('style', 'stroke: #ffffff');
  logoPageHome.classList.add('reveal-text');
  logoPageHome.classList.remove('rise-text');
  backgroundMain.classList.remove('background__main--lib');
}

function markupPageLibrary() {
  mainPage = 'libraryPage';
  refs.library.classList.add('side-nav__link--current');
  refs.home.classList.remove('side-nav__link--current');
  refs.header.classList.add('header-bg-lib');
  refs.logoLink.setAttribute('style', 'cursor:pointer;');
  logoIcon.setAttribute('style', 'stroke: currentColor');
  logoPageHome.classList.remove('reveal-text');
  logoPageHome.classList.add('rise-text');
  backgroundMain.classList.add('background__main--lib');
}

function markupForm() {
  activeHeader.innerHTML = `<form class="search-form" data-id="searchForm">
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
