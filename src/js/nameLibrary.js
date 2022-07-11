import { movieService } from "./movie-service";
let library;

//Функція обирає потрібну бібліотеку
export function librarySelection(){
    switch (movieService.langauge) {
        case 'en-US': library = libraryAll[0]; break;
        case 'uk': library = libraryAll[1]; break;
        default: library = libraryAll[0];
      }
      return library;
};


//Бібліотека ангійських назв
const libraryAll = [
    {langauge: 'en-US',
    homeBtn:'home',
    myLibraryBtn: 'my library',
    checkInBtn: 'check in',
    InputSearch: 'Movie search',

    footerAll: 'All Rights Reserved',
    footerDev: 'Developed with',
    footerBy: 'by',
    footerBtn: 'GoIT Students',

    pagPrev: 'Prev',
    pagNext: 'Next',
    },

    {langauge: 'uk',
    homeBtn:'додому',
    myLibraryBtn: 'бібліотека',
    checkInBtn: 'рєестрація',
    InputSearch: 'Пошук фільмів',

    footerAll: 'Усі права захищено',
    footerDev: 'Розроблено з',
    footerBy: 'від',
    footerBtn: ' студентів GoIT',

    pagPrev: 'Далі',
    pagNext: 'Назад',
    },

]
