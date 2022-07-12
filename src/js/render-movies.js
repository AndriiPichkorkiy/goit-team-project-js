import refs from '../js/refs';
import templeteCard from './card-templete';

//-------- Рендер фільмів -----------------------------
export function renderCollection(data) {
  const markup = data.map(templeteCard).join('');
  refs.moviesCard.innerHTML = markup;
}
//----------------------------------------------------------------
