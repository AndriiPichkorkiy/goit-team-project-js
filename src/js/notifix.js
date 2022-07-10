// import 'animate.css';
import refs from './refs';
import vectorSvg from '../images/icons.svg';

console.log(refs.notifix);

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



        //  <div class="rectangle animate__fadeOutLeft">
        //     <div class="notification-text">
        //         <svg class="notification-icon">
        //     <use href="./images/icons.svg#icon-info"></use>
        // </svg>
        //         <p><span> This is a text notification.</span></p>
        //     </div>
        // </div>




//         <div class="container" data-id="notifix">
//  <div class="rectangle animate__fadeOutLeft">
//             <div class="notification-text">
//                 <svg class="notification-icon">
//             <use href="./images/icons.svg#icon-info"></use>
//         </svg>
//                 <p><span> This is a text notification.</span></p>
//             </div>
//         </div>
//   </div>