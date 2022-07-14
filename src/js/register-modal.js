import {
  authSignInUser,
  authSignUpUser,
  showNotificashka,
} from './firebaseAuth';
import refs from '/src/js/refs';
import { signOut, getAuth } from 'firebase/auth';
import { FireBaseApi } from './fireBaseApi';

const refs1 = {
  formSignIn: document.querySelector('#form-sign-in'),
  formSignUp: document.querySelector('#form-sign-up'),
  modalWrapperSignIn: document.querySelector('[data-modal-sign-in]'),
  modalWrapperSignUp: document.querySelector('[data-modal-sign-up]'),
  modalGreetings: document.querySelector('[data-modal-greetings]'),
  buttonAuth: document.querySelector('#btn-auth'),
  buttonClose: null,
  inputCheck: document.querySelector('#agreement'),
  buttonChangeModal: null,
  buttonCloseGreetings: null,
};

refs1.buttonCloseSignIn = document.querySelector('[data-modal-close-sign-in]');
refs1.buttonCloseSignIn.addEventListener('click', openSignInModal);

refs1.buttonCloseSignUp = document.querySelector('[data-modal-close-sign-up]');
refs1.buttonCloseSignUp.addEventListener('click', openSignUpModal);

//buttons for change between modals
refs1.buttonChangeToSignIn = document.getElementById('btn-open-sign-in');
refs1.buttonChangeToSignIn.addEventListener('click', changeModal);

refs1.buttonChangeToSignUp = document.getElementById('btn-open-register');
refs1.buttonChangeToSignUp.addEventListener('click', changeModal);
//====================================

//add close for modal by click on wrapper
refs1.modalWrapperSignIn.addEventListener('click', onBackDropClick);
refs1.modalWrapperSignUp.addEventListener('click', onBackDropClick);
//====================================

//add close for privacy modal
refs.closePrivacyBottom.addEventListener('click', closeModalPrivacy);
refs.closePrivacy.addEventListener('click', closeModalPrivacy);
refs.backdropPrivacy.addEventListener('click', closeModalPrivacy);

//add open for privacy modal
refs.polycy.addEventListener('click', openModalPrivacy);
//====================================

refs1.buttonCloseGreetings = document.querySelector(
  '[data-modal-close-greetings]'
);
refs1.buttonCloseGreetings.addEventListener('click', openGreetingsModal);

export function openSignInModal(undefined, isChange) {
  event.preventDefault();
  const modal = refs1.modalWrapperSignIn;
  openOrCloseFireBaseModals(modal, isChange);
}

export function openSignUpModal(event, isChange) {
  const modal = refs1.modalWrapperSignUp;
  openOrCloseFireBaseModals(modal, isChange);
}

function openOrCloseFireBaseModals(modal, isChange) {
  if (modal.classList.contains('is-hidden')) {
    modal.classList.remove('is-hidden');
    if (!isChange) window.addEventListener('keydown', onEscKeyPress);
  } else {
    modal.classList.add('is-hidden');
    if (!isChange) window.removeEventListener('keydown', onEscKeyPress);
  }
}

export function openGreetingsModal() {
  refs1.modalGreetings.classList.toggle('is-hidden');
  const cake = document.querySelector('[data-modal-icon-cake]');
  cake.classList.add('modal__title__icon');
}

function changeModal() {
  openSignUpModal(undefined, 'change');
  openSignInModal(undefined, 'change');
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  if (
    event.code !== ESC_KEY_CODE ||
    !refs.backdropPrivacy.classList.contains('is-hidden')
  ) {
    return;
  }
  closeOpenedModal();
}

function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    closeOpenedModal();
  }
}

function closeOpenedModal() {
  let modal = refs1.modalWrapperSignUp;
  if (!modal.classList.contains('is-hidden')) {
    openSignUpModal();
  }
  modal = refs1.modalWrapperSignIn;
  if (!modal.classList.contains('is-hidden')) {
    openSignInModal();
  }
}

function openModalPrivacy() {
  refs.backdropPrivacy.classList.remove('is-hidden');
  window.removeEventListener('keydown', onEscKeyPressPrivacy);
  // document.body.classList.add('show-film-modal');
  document.body.style.overflow = 'hidden';
}

function closeModalPrivacy() {
  refs.backdropPrivacy.classList.add('is-hidden');
  window.addEventListener('keydown', onEscKeyPressPrivacy);
  // document.body.classList.remove('show-film-modal');
  document.body.removeAttribute('style');
}

function onEscKeyPressPrivacy(event) {
  const ESC_KEY_CODE = 'Escape';
  if (event.code === ESC_KEY_CODE) closeModalPrivacy();
}

//return modals
[refs.backdropPrivacy, refs.signIn, refs.signUp, refs.modalGR].forEach(el =>
  el.removeAttribute('style')
);
