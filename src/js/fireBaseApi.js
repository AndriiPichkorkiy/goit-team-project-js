import { openSignInModal, logOut } from './register-modal';
import refs from '/src/js/refs';
export class FireBaseApi {
  button = null;
  menuAuth = null;
  libraryContent = null;
  currentUser = null;

  static init() {
    this.button = document.querySelector('[data-id = "auth"]');
    this.libraryContent = document.querySelector('.movies-card');
    this.menuAuth = document.querySelector('.enter-btn');
    this.button.addEventListener('click', openSignInModal);
  }

  static authSuccess({ email }) {
    refs.placeForName.innerHTML = `<p>${email.split('@')[0]}</p>`;
    this.menuAuth.innerHTML = `<p>LOG OUT</p>`;

    this.button.removeEventListener('click', openSignInModal);
    this.button.addEventListener('click', logOut);
    // this.libraryContent.innerHTML = `<div class="content__wrapper">
    //     <h2 class="content__title">There's nothing here! <br/>
    //       Please add some movies to
    //       <span class="content__text">${textContent}</span>!
    //     </h2>
    //   </div>`;
  }
}

FireBaseApi.init();
