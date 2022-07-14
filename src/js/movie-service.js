class MovieService {
  constructor() {
    //Це для пошуку за ключовими словами
    this.page = 1;
    this.totalPage = 1;

    this.data = {};
    //Зберігає останній позитивний пошуковий запит (для внутрішньої логіки)
    this.query = '';
    //Тут інформація про успіх запитів
    this.message = '';
    // Тут інформація про жанри, масив об'єктів:
    this.genres = this.galleryData();
    //Налаштування мови. За замовчуванням, англійська
    this.langauge = 'en-US';
    this.isnotification = false;
    this.totalResults = 1;
  }

  // -----Методи для використання-------
  // Пошук 1 фільма за айдішніком;
  async getOneMovie(id) {
    this.message = 'OK!';
    if (!id) {
      this.message = 'There is no search query';
      return;
    }
    const action = `movie/${+id}`;
    const parameters = new URLSearchParams({
      append_to_response: 'videos',
    });
    return this.getMovies(action, parameters);
  }
  //Пошук фільмів за популярністю АБО ключовим словом
  async getSearchQuery(searchQuery, page) {
    if (!searchQuery) {
      return await this.getPopularMovies(page);
    }

    switch (searchQuery) {
      case 'popular':
        return await this.getPopularMovies(page);
        return;
      case 'rating':
        return await this.getTopRated(page);
        return;
      case 'future':
        return await this.getUpcoming(page);
        return;

      default:
        break;
    }
    return await this.getMoviesByTitle(searchQuery, page);
  }
  // Пошук фільмів за ключовим словом
  async getMoviesByTitle(searchQuery, page) {
    this.message = 'OK!';
    if (!searchQuery) {
      this.message = 'Empty request';
      return;
    }
    if (page < 1) {
      this.message = 'Small value page';
      return;
    }
    if (this.query && page > this.totalPage) {
      this.message = 'Great value page';
      return;
    }

    const action = 'search/movie';
    const parameters = new URLSearchParams({
      page: page || 1,
      query: searchQuery,
    });

    const answer = await this.getMovies(action, parameters);
    if (!answer) {
      return;
    }
    this.isnotification = this.query !== searchQuery ? true : false;
    this.query = searchQuery;

    return answer;
  }
  // пошук фільмів за популярністю
  async getPopularMovies(page) {
    return await this.SearchMoviesByCategory('trending/movie/week', page);
  }
  // пошук фільмів з найбільшим рейтингом.
  async getTopRated(page) {
    return await this.SearchMoviesByCategory('movie/top_rated', page);
  }
  // пошук майбутніх фільмів.
  async getUpcoming(page) {
    return await this.SearchMoviesByCategory('movie/upcoming', page);
  }

  //-----Системні методи-------
  //Спільний метод для знаходження фільмів за популярністю, з найбільшим рейтингом, майбутніх фільмів
  async SearchMoviesByCategory(action, page) {
    this.message = 'OK!';
    if (page < 1) {
      this.message = 'Small value page';
      return;
    }
    if (this.totalPage !== 1 && page > this.totalPage) {
      this.message = 'Great value "page"';
      return;
    }
    const parameters = new URLSearchParams({
      page: page || 1,
    });
    const movies = await this.getMovies(action, parameters);
    this.isnotification = this.page === 1 ? true : false;

    return movies;
  }
  //Формування URL для подальшого запиту на сервер. Допоміжний метод
  createUrl(action, param) {
    const API_KEY = '833791a5e754a1f0443be5fc62646bdb';
    const parameters = param || '';
    const baseUrl = 'https://api.themoviedb.org/3/';
    const baseParameters = new URLSearchParams({
      api_key: API_KEY,
      //без "контенту для дорослих"
      include_adult: false,
      //мова - англійська
      language: this.langauge,
    });
    return baseUrl + action + '?' + baseParameters + '&' + parameters;
  }
  //запрос на сервер по раніше сформованому URL
  async fetchMovies(url) {
    try {
      return await fetch(url).then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      });
    } catch (error) {
      this.message = error.message;
      return;
    }
  }
  //Повертає об'єкт відповіді
  async getMovies(action, parameters) {
    const url = this.createUrl(action, parameters);
    const movies = await this.fetchMovies(url);

    //Якщо запрос карточки по Id
    if (
      action.slice(0, 6) === 'movie/' &&
      action.slice(0, 9) !== 'movie/top' &&
      action.slice(0, 8) !== 'movie/up'
    ) {
      if (!movies) {
        this.message = 'No information found';
        return;
      } else {
        return movies;
      }
    }

    if (!movies || movies.results.length === 0) {
      this.message = 'No information found';
      return;
    }

    if (action.slice(0, 9) === 'movie/top'){
        if (movies.total_pages > 500){movies.total_pages = 500; movies.total_results =  10000};
    };

    this.data = movies;
    this.page = movies.page;
    this.totalPage = movies.total_pages;
    this.totalResults = movies.total_results;
    return movies;
  }

  //-----Додаткові методи-------
  //Запит для отримання масива з жанрами фільмів
  async getGenres() {
    const url = this.createUrl('genre/movie/list');
    const { genres } = await this.fetchMovies(url);
    return genres;
  }
  //Додає масив об'єктів з жанрами
  async galleryData() {
    this.genres = await this.getGenres();
  }
}

// Створює екземпляр класу і робить іменований експорт
export const movieService = new MovieService();
