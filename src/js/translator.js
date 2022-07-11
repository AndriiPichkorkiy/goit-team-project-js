
import { movieService } from "./movie-service";

const linkTranslator = document.querySelector('.translator-link');

const planning = {
//1. Згенерувати кнопку та передати її в хедер
//2. Навішати стилі
//3. Написати логіку пемикання кнопки

//4. Зробити файл бібліотеки надписів елементів на сторінці та написати логіку для експорту відповідного класу
//5. Використати змінні з бібліотеки у всіх файлах розміткм

//6. Зробити аналіз даних та перезапуск поточної відкритої сторінки
};

//1. Згенерувати кнопку та передати її в хедер


// function markupBtnTranslator(langauge){
//     // const Lang = ?:
//     return `<div class='translator-btn' >
//     <a href="" class="translator-link">
//         <span class="translator-native" lang="ua">Укр</span>
//     </a>
// </div>`;
    
// };

//Перший запуск перекладача (при завантаженні хедера)
export async function firstRunTranslator(){
    //Що в локалсториджі
    getLanguageLocal();
    //Розмітка для кнопки
    const markup = btnTrMarkup();
    //Рендеримо кнопку
    btnTrRender(markup);
    //Оновлюємо жанри
    await movieService.galleryData();
}

// Робить перевірку ключа langauge в локалсторіджі. Зберігає отримані дані в movieService.langauge
export function getLanguageLocal(){
    try{
        movieService.langauge = localStorage.getItem('langauge');
    }catch{
        localStorage.setItem('langauge', 'en-US');
        movieService.langauge = 'en-US';
    }
};

//Перезаписує мову в локалсторідж
function writeLangaugeLocal(arg){
    const lang= `${arg}`;
    localStorage.setItem('langauge', lang);
    movieService.langauge = lang;
};

// Створює розмітку кнопки відповідно до мови
function btnTrMarkup(){
    let markup;
    if (movieService.langauge === 'en-US'){markup = `<span class="translator-native" lang="ua">Укр</span>`;};
    if (movieService.langauge === 'uk'){{markup = `<span class="translator-native" lang="en"> US</span>`;};};
    return markup;
}

// Рендерить кнопку перекладача в хедері
function btnTrRender(markup){
    linkTranslator.innerHTML = markup;
}

// Візуальне перемикання кнопки при ї натисканні (для двох мов: 'en-US' та 'uk')
function triggerForTrBtn(){
    if (movieService.langauge === 'uk'){
        movieService.langauge = 'en-US';
    };
    if (movieService.langauge === 'en-US'){
        movieService.langauge = 'uk';
    };
};

//Слухач події при натисканні на кнопку
linkTranslator.addEventListener('click', clickTrLink);

function clickTrLink(e){
    // e.preventDefault();
    //Перезаписали мову в Локалсторідж
    let lang;
    if (movieService.langauge === 'uk'){lang = 'en-US';};
    if (movieService.langauge === 'en-US'){lang = 'uk';};
    writeLangaugeLocal(lang);

    //Перемалювали кнопки
    // triggerForTrBtn();

    // //Перезаписати жанри
    // movieService.galleryData();
    // console.log(movieService.genres);

    //Змінтит бібліотеку назв


}


