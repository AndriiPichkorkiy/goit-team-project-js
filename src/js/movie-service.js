export default class MovieService {
  constructor() {
    //Це для пошуку за ключовими словами
    this.page = 1;
    this.totalPage = 1;
    //Це для пошуку популярних фільмів
    this.pagePopular = 1;
    this.totalPagePopular = 1;

    //Зберігає останній позитивний пошуковий запит (для внутрішньої логіки)
    this.query = '';
    //Тут інформація про успіх запитів
    this.message = '';
    // Тут інформація про жанри, масив об'єктів:
    this.genres = this.galleryData();
  }

  //Пошук 1 фільма за айдішніком (для отримання детальної інформації по фільму);
  async getOneMovie(id) {
    this.message = 'OK!';
    if (!id) {
      return;
    }
    const url = this.createUrl(`movie/${+id}`);

    const movie = await this.fetchMovies(url);

    if (movie) {
      return movie;
    }
    this.message = 'No information found';
    return;
  }

  //пошук фільмів за популярністю. Можна передавати необов'язковий параметр page(ціле число), повертає 20 фільмів
  async getPopularMovies(page) {
    this.message = 'OK!';
    // Перевіряє, чи не перевищує пошуковий запит від фактично можливого
    if (
      this.totalPagePopular !== 1 &&
      this.pagePopular === this.totalPagePopular
    ) {
      this.message = "Let's page";
      return;
    }
    if (this.totalPagePopular !== 1 && page >= this.totalPagePopular) {
      this.message = 'Great value "page"';
      return;
    }

    const action = 'trending/movie/week';
    const parameters = new URLSearchParams({
      page: page || this.pagePopular,
    });
    const url = this.createUrl(action, parameters);

    const movies = await this.fetchMovies(url);
    if (!movies || movies.results.length === 0) {
      this.message = 'No information found';
      return;
    }

    this.pagePopular = movies.page;
    this.totalPagePopular = movies.total_pages;

    return movies;
  }

  //Пошук фільмів за назвою(ключовим словом). searchQuery - обов'язковий елемент, строка без пропусків на початку та кінці. Page - необов'язковий аргумент, ціле число.
  async getMoviesByTitle(searchQuery, page) {
    this.message = 'OK!';
    if (!searchQuery) {
      this.message = 'empty request';
      return;
    }
    // Перевіряє, чи співпадає новий запит з попереднім. Якщо так, то збільшити пагінацію на 1 і зробити запит.
    // а після запиту перевірити. Якщо запит був успішний, то пагінацію залишити, в this.query записати назву запиту
    // якщо запит не був успішний, то пагінації повернути попереднє значення.
    let backupPage = 1;
    if (searchQuery !== this.query) {
      backupPage = this.page;
      this.page = 1;
    } else {
      if (this.page === this.totalPage) {
        this.message = "Let's page";
        return;
      }
      if (page >= this.totalPage) {
        this.message = 'Great value "page"';
        return;
      }
      backupPage = this.page;
      this.page += 1;
    }

    const action = 'search/movie';
    const parameters = new URLSearchParams({
      page: page || this.page,
      query: searchQuery,
    });

    const url = this.createUrl(action, parameters);
    const movies = await this.fetchMovies(url);
    if (!movies || movies.total_pages === 0 || movies.results.length === 0) {
      this.page = backupPage;
      this.message = 'No information found';
      return;
    }

    this.query = searchQuery;
    if (page) {
      this.page = movies.page;
    }
    this.totalPage = movies.total_pages;
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

  resetPage() {
    this.page = 1;
  }

  resetTotalPage() {
    this.totalPage = 1;
  }

  resetPagePopular() {
    this.pagePopular = 1;
  }
}

//Створює екземпляр класу і робить іменований експорт
export const movieService = new MovieService();
