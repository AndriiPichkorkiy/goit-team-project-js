import {
  authSignInUser,
  authSignUpUser,
  showNotificashka,
} from './firebaseAuth';
import refs from '/src/js/refs';
import { signOut, getAuth } from 'firebase/auth';

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

refs1.buttonClose = document.querySelector('[data-modal-close-sign-in]');
refs1.buttonClose.addEventListener('click', openSignInModal);

refs1.buttonClose = document.querySelector('[data-modal-close-sign-up]');
refs1.buttonClose.addEventListener('click', openSignUpModal);

//buttons for change between modals
refs1.buttonChangeToSignIn = document.getElementById('btn-open-sign-in');
refs1.buttonChangeToSignIn.addEventListener('click', changeModal);

refs1.buttonChangeToSignUp = document.getElementById('btn-open-register');
refs1.buttonChangeToSignUp.addEventListener('click', changeModal);
//end of buttons

refs1.buttonCloseGreetings = document.querySelector(
  '[data-modal-close-greetings]'
);
refs1.buttonCloseGreetings.addEventListener('click', openGreetingsModal);

export function openSignInModal() {
  const button = document.querySelector('[data-id = "auth"]');
  if (button.dataset.status === 'logOut') {
    //log out
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        const menuAuth = document.querySelector('.enter-btn');
        menuAuth.innerHTML = `<p>Check in</p>`;
        button.dataset.status = 'none';
        showNotificashka('logOut', refs.placeForName.innerText);
        refs.placeForName.innerHTML = '';
      })
      .catch(error => {
        // An error happened.
        console.log(error);
      });
  } else {
    //open modal window
    refs1.modalWrapperSignIn.classList.toggle('is-hidden');
  }
}

export function openSignUpModal() {
  refs1.modalWrapperSignUp.classList.toggle('is-hidden');
}

export function openGreetingsModal() {
  refs1.modalGreetings.classList.toggle('is-hidden');
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
