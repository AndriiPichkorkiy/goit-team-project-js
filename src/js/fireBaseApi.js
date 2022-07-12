import { openSignInModal } from './register-modal';
import refs from '/src/js/refs';
export class FireBaseApi {
  button = null;
  menuAuth = null;
  libraryContent = null;

  static init() {
    this.button = document.querySelector('[data-id = "auth"]');
    this.libraryContent = document.querySelector('.movies-card');
    this.menuAuth = document.querySelector('.enter-btn');
    this.button.addEventListener('click', event => {
      event.preventDefault();
      openSignInModal();
    });
  }

  static authSuccess({ email }) {
    refs.placeForName.innerHTML = `<p>${email.split('@')[0]}</p>`;
    this.menuAuth.innerHTML = `<p>LOG OUT</p>`;

    const btn = document.querySelector('[data-id = "auth"]');
    btn.setAttribute('data-status', 'logOut');
    // this.libraryContent.innerHTML = `<div class="content__wrapper">
    //     <h2 class="content__title">There's nothing here! <br/>
    //       Please add some movies to
    //       <span class="content__text">${textContent}</span>!
    //     </h2>
    //   </div>`;
  }
}

FireBaseApi.init();
