import refs from '/src/js/refs';

const activeHeader = document.querySelector('.js-active-header');

let mainPage = 1;
markupForm();
refs.home.classList.add('side-nav__link--current');
refs.logoLink.setAttribute('style', 'cursor:default');

refs.home.addEventListener('click', e => {
  e.preventDefault();
  if (mainPage === 1) return;

  markupPageHome();
  markupForm();
});

refs.library.addEventListener('click', e => {
  e.preventDefault();
  if (mainPage === 2) return;
  markupPageLibrary();
  markupButtons();
});

refs.logoLink.addEventListener('click', e => {
  e.preventDefault();
  if (mainPage !== 2) return;
  markupPageHome();
  markupForm();
});

function markupPageHome() {
  mainPage = 1;
  refs.home.classList.add('side-nav__link--current');
  refs.library.classList.remove('side-nav__link--current');
  refs.header.classList.remove('header-bg-lib');
  refs.logoLink.setAttribute('style', 'cursor:default');
}

function markupPageLibrary() {
  mainPage = 2;
  refs.library.classList.add('side-nav__link--current');
  refs.home.classList.remove('side-nav__link--current');
  refs.header.classList.add('header-bg-lib');
  refs.logoLink.setAttribute('style', 'cursor:pointer;');
}

function markupForm() {
  activeHeader.innerHTML = ` <form class="search-form" data-id="searchForm">
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
              <use href="/src/images/icons.svg/#icon-search"></use>
            </svg>
          </button>
        </form>`;
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
