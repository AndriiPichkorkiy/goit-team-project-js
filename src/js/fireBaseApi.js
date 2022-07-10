import { openSignInModal } from './register-modal';
export class FireBaseApi {
  button = null;
  menuAuth = null;

  static init() {
    this.button = document.querySelector('[data-id = "auth"]');
    this.menuAuth = document.querySelector('.enter-btn');
    this.button.addEventListener('click', event => {
      event.preventDefault();
      openSignInModal();
    });
  }

  static authSuccess({ email }) {
    this.menuAuth.innerHTML = `<p>Hello ${email}</p>`;
  }
}

FireBaseApi.init();
