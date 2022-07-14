import refs from './refs';
import vectorSvg from '../images/icons.svg';

export function notifix(text, svgType){
    const markup = `<div class="rectangle">
        <div class="notification-text">
        <svg class="notification-icon">
        <use href="${vectorSvg}#icon-${svgType}"></use>
        </svg>
        <span> ${text} </span>
        </div>
        </div>`
    refs.notifix.innerHTML = markup;
}

export default function renderNotifix(text, svgType) {

    const markup = `<div class="rectangle-sign">
        <div class="notification-text-sign">
        <svg class="notification-icon-sign">
        <use href="${vectorSvg}#icon-${svgType}"></use>
        </svg>
        <span> ${text} </span>
        </div>
        </div>`
        refs.notifixSign.innerHTML = markup;
}