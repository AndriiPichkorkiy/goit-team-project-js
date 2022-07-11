import { openSignInModal } from './register-modal';
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
    this.menuAuth.innerHTML = `<p>Hello ${email}</p>`;
    // this.libraryContent.innerHTML = `<div class="content__wrapper">
    //     <h2 class="content__title">There's nothing here! <br/>
    //       Please add some movies to
    //       <span class="content__text">${textContent}</span>!
    //     </h2>
    //   </div>`;
  }
}

FireBaseApi.init();
