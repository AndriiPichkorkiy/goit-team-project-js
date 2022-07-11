import refs from './refs';
import vectorSvg from '../images/icons.svg';

export function moreTwoCharacters() {
    const markup = `<div class="rectangle animate__fadeOutLeft">
        <div class="notification-text">
        <svg class="notification-icon">
        <use href="${vectorSvg}#icon-info"></use>
        </svg>
        <span> Please enter more than 2 characters </span>
        </div>
        </div>`
    refs.notifix.innerHTML = markup;
}

export function correctionRequest() {
    const markup = `<div class="rectangle animate__fadeOutLeft">
        <div class="notification-text">
        <svg class="notification-icon">
        <use href="${vectorSvg}#icon-rupor"></use>
        </svg>
        <span> Please enter a correction request </span>
        </div>
        </div>`
    refs.notifix.innerHTML = markup;
}
