import { movieService } from './movie-service';

export default function sayGenres(genre_ids) {
  if (genre_ids.length === 1 && genre_ids[0] === "") {
    return 'No genre';
  }
  if (!genre_ids || genre_ids.length === 0) {
    return 'No genre';
  }

  //Максимальна довжина рядка. Рекомендовано від 22 до 25
  const maxLength = 24;
  const other = 'Other';

  let i = 0;
  let genreNames = '';
  while (i < genre_ids.length) {
    const { name } = movieService.genres.find(obj => {
      if (obj.id === +genre_ids[i]) {
        return obj;
      }
    });
    i += 1;
    if (!genreNames) {
      genreNames += name;
    } else {
      if (genreNames.length + name.length >= maxLength - (other.length + 2)) {
        genreNames += ', ' + other;
        break;
      }
      genreNames += ', ' + name;
    }
  }
  return genreNames;
}
