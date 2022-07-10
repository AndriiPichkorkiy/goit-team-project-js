import { authSignInUser, authSignUpUser, userName } from './firebaseAuth';

const refs = {
  formSignIn: document.querySelector('#form-sign-in'),
  formSignUp: document.querySelector('#form-sign-up'),
  modalWrapperSignIn: document.querySelector('[data-modal-sign-in]'),
  modalWrapperSignUp: document.querySelector('[data-modal-sign-up]'),
  modalGreetings: document.querySelector('[data-modal-greetings]'),
  buttonSignIn: document.querySelector('.btn-sign-in'),
  buttonSignUp: document.querySelector('.btn-sign-up'),
  buttonAuth: document.querySelector('#btn-auth'),
  buttonClose: null,
  inputCheck: document.querySelector('#agreement'),
  buttonChangeModal: null,
  buttonCloseGreetings: null,
};

refs.buttonSignIn.addEventListener('click', openSignInModal);
refs.buttonSignUp.addEventListener('click', openSignUpModal);

refs.formSignIn.addEventListener('submit', authSignInUser);
refs.formSignUp.addEventListener('submit', authSignUpUser);

refs.buttonClose = document.querySelector('[data-modal-close-sign-in]');
refs.buttonClose.addEventListener('click', openSignInModal);

refs.buttonClose = document.querySelector('[data-modal-close-sign-up]');
refs.buttonClose.addEventListener('click', openSignUpModal);

refs.buttonClose = document.querySelector('#btn-open-sign-in');
refs.buttonClose.addEventListener('click', changeModal);

refs.buttonCloseGreetings = document.querySelector(
  '[data-modal-close-greetings]'
);
refs.buttonCloseGreetings.addEventListener('click', openGreetingsModal);

export function openSignInModal() {
  refs.modalWrapperSignIn.classList.toggle('is-hidden');
}

export function openSignUpModal() {
  refs.modalWrapperSignUp.classList.toggle('is-hidden');
}

export function openGreetingsModal() {
  refs.modalGreetings.classList.toggle('is-hidden');
}
function changeModal() {
  openSignUpModal();
  openSignInModal();
}

// function authSignUpUser(event) {
//   event.preventDefault();

//   // if (!refs.inputCheck.classList.contains(':checked')) {
//   //   console.log('please accept the private pilicy');
//   //   return;
//   // }
//   console.log('hello');
// }
