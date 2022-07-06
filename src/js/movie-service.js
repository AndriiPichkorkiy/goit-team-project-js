class MovieService {
  constructor() {
    //Це для пошуку за ключовими словами
    this.page = 1;
    this.totalPage = 1;
    //Це для пошуку популярних фільмів
    this.pagePopular = 1;
    this.totalPagePopular = 1;
    this.data = {};
    //Зберігає останній позитивний пошуковий запит (для внутрішньої логіки)
    this.query = '';
    //Тут інформація про успіх запитів
    this.message = '';
    // Тут інформація про жанри, масив об'єктів:
    this.genres = this.galleryData();
  }

  // Пошук 1 фільма за айдішніком (для отримання детальної інформації по фільму);
  async getOneMovie(id) {
    this.message = 'OK!';
    if (!id) {
      return;
    }

    const url = this.createUrl(`movie/${+id}`);
    const movie = await this.fetchMovies(url);
    if (!movie) {
      this.message = 'No information found';
      return;
    }
    return movie;
  }

  // пошук фільмів за популярністю. Можна передавати необов'язковий параметр page(ціле число), повертає 20 фільмів
  async getPopularMovies(page) {
    this.message = 'OK!';
    if (page < 1) {
      this.message = 'Small value page';
      return;
    }
    if (this.totalPagePopular !== 1 && page > this.totalPagePopular) {
      this.message = 'Great value "page"';
      return;
    }

    const action = 'trending/movie/week';
    const parameters = new URLSearchParams({
      page: page || this.pagePopular,
    });

    return await this.getMovies(action, parameters);
  }

  // Пошук фільмів за назвою(ключовим словом). searchQuery - обов'язковий елемент, строка без пропусків на початку та кінці. Page - необов'язковий аргумент, ціле число.
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
    this.query = searchQuery;
    return answer;
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
      language: 'en-US',
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
      alert(error.message);
      return;
    }
  }

  //Запит для отримання конфігурації відповіді. Додатковий метод
  getConfiguration() {
    const url = this.createUrl('configuration');
    return this.fetchMovies(url);
  }

  async galleryData() {
    this.genres = await this.getGenres();
  }

  //Запит для отримання масива з жанрами фільмів
  async getGenres() {
    const url = this.createUrl('genre/movie/list');
    const { genres } = await this.fetchMovies(url);
    return genres;
  }

  async getMovies(action, parameters) {
    const url = this.createUrl(action, parameters);
    const movies = await this.fetchMovies(url);

    if (!movies || movies.results.length === 0) {
      this.message = 'No information found';
      return;
    }
    this.data = movies;
    if ((action = 'search/movie')) {
      this.page = movies.page;
      this.totalPage = movies.total_pages;
    }
    if ((action = 'trending/movie/week')) {
      this.pagePopular = movies.page;
      this.totalPagePopular = movies.total_pages;
    }
    return movies;
  }

  resetPage() {
    this.page = 1;
  }
}

// Створює екземпляр класу і робить іменований експорт
export const movieService = new MovieService();
