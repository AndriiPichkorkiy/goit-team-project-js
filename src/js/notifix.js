import 'animate.css';
// import ''
import refs from './refs';
import vectorSvg from '../images/icons.svg';

// refs.notifix = document.querySelector('[]

console.log(refs.notifix)
export function moreTwoCharacters() {
    const markup = `<div class="rectangle animate__fadeOutLeft">
        <div class="notification-text">
        <svg class="notification-icon">
        <use href="./images/${vectorSvg}#icon-info"></use>
        </svg>
        <p><span> Please enter more than 2 characters </span></p>
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