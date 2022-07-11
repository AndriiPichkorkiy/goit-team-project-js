import { authSignInUser, authSignUpUser } from './firebaseAuth';

const refs = {
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

// function onFormSignInSubmit(event) {
//   event.preventDefault();

//   if (!formData['user-mail'] || !formData['user-password']) {
//     return alert('Please, fill all form fields');
//   }

//   localStorage.removeItem(FORM_STORAGE_KEY);
//   console.log(formData);
//   event.currentTarget.reset();
//   clearFormData(formData);

//   const email = event.target.querySelector('#user-email').value;
//   const password = event.target.querySelector('#user-password').value;

//   authWithEmailAndPassword(email, password)
//     .then(response => response.json())
//     .then(data => {
//       if (data.error) {
//         alert(data.error.message);
//       } else {
//         console.log('It*s ok!');
//         FireBaseApi.authSuccess(data);
//         console.log(data);
//         openSignInModal();
//       }
//     });
// }

// async function onFormSignUpSubmit(event) {
//   event.preventDefault();

//   if (!formData['user-mail'] || !formData['user-password']) {
//     return alert('Please, fill all form fields');
//   }

//   localStorage.removeItem(FORM_STORAGE_KEY);
//   console.log(formData);
//   event.currentTarget.reset();
//   clearFormData(formData);

//   userName = await event.target.querySelector('#user-name').value;
//   const email = await event.target.querySelector('#user-email-register').value;
//   const password = await event.target.querySelector('#user-password-register')
//     .value;

//   await registerUser(email, password, userName)
//     .then(response => response.json())
//     .then(data => {
//       if (data.error) {
//         alert(data.error.message);
//       } else {
//         console.log('It*s ok!');
//         // FireBaseApi.authSuccess(userName);
//         FireBaseApi.authSuccess(data);
//         openGreetingsModal();
//         openSignUpModal();
//       }
//     });
// }
