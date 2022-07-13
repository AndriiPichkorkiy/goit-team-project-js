import refs from './refs';
import { movieService } from './movie-service';
import renderCardTemplate from './card-templete';
import './header';
import { loading } from './loading';
import { blockSreen } from './loading';
import {
  renderPagination,
  removePagination,
  showPagination,
} from './pagination';
import { moreTwoCharacters, correctionRequest } from './notifix';
import { deactivateButtons } from './filter-buttons';

refs.searchForm = document.querySelector('.search-form');

export default function searchMovies(event) {
  event.preventDefault();
  deactivateButtons();
  const value = event.currentTarget.elements.query.value.trim();

  if (value.length <= 2 || value.length === 0) {
    moreTwoCharacters();
    return;
  }

  loading.on();

  blockSreen();

  removePagination();

  fetchData(value);

  clearMarkup();
}

async function fetchData(value) {
  const total_pages = movieService.totalPage;

  const data = await movieService.getSearchQuery(value, 1);

  if (!data) {
    removePagination();

    loading.off();

    refs.searchForm.reset();

    correctionRequest();

    return;
  }
  if (movieService.isnotification) {
    alert (`Знайдено ${movieService.totalResults} фільмів`)
  }
  const card = data.results.map(result => renderCardTemplate(result)).join('');

  refs.moviesCard.innerHTML = card;

  loading.off();

  if (total_pages >= 2) {
    // call pagination
    renderPagination(movieService.totalPage, movieService.page);
  }
}

function clearMarkup() {
  refs.moviesCard.innerHTML = '';
}
