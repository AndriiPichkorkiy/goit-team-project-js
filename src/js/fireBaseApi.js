import { openSignInModal } from './register-modal';
import refs from '/src/js/refs';
import { showNotificashka } from './firebaseAuth';
import {
  initializeApp,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser,
} from 'firebase/auth';

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
    this.button.addEventListener('click', this.logOut);
  }

  static logOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        const menuAuth = document.querySelector('.enter-btn');
        menuAuth.innerHTML = `<p>Check in</p>`;
        showNotificashka('logOut', refs.placeForName.innerText);
        refs.placeForName.innerHTML = '';

        FireBaseApi.button.addEventListener('click', openSignInModal);
        FireBaseApi.button.removeEventListener('click', FireBaseApi.logOut);

        FireBaseApi.currentUser = null;
      })
      .catch(error => {
        // An error happened.
        console.log(error);
      });
  }
}
FireBaseApi.init();
