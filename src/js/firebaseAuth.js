const { pad } = require('lodash');
// import refs from '/src/js/refs';
import {
  openSignUpModal,
  openGreetingsModal,
  openSignInModal,
} from './register-modal';
import { FireBaseApi } from './fireBaseApi';
import renderNotifix from './notifix';

import { loading, blockSreen } from './loading';

const refs = {
  formSignIn: document.querySelector('#form-sign-in'),
  formSignUp: document.querySelector('#form-sign-up'),
};

// let userName;
const FORM_STORAGE_KEY = 'register-form-state';

let formData = {};

refs.formSignIn.addEventListener('submit', authSignInUser);
refs.formSignUp.addEventListener('submit', authSignUpUser);

refs.formSignIn.addEventListener('input', addFormFields);
refs.formSignUp.addEventListener('input', addFormFields);

//Зареєструватися
async function authSignUpUser(event) {
  event.preventDefault();

  const {
    email: { value: email },
    password: { value: password },
    agreement: { checked },
  } = event.target;

  if (!email || !password || !checked) return showNotificashka('noValidForm');
  blockSreen();
  loading.on();
  await createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      loading.off();
      const user = userCredential.user;

      FireBaseApi.changeCurrentUser(user);

      showNotificashka('registerSuccess', user);


      clearFormData(formData);

      FireBaseApi.authSuccess(user);

      openGreetingsModal();

      openSignUpModal();
    })
    .catch(error => {
      blockSreen();
      loading.off();
      // const errorCode = error.code;
      const errorMessage = error.message.split(': ')[1];

      showNotificashka('registerFaild', errorMessage);
      // ..
    })
    .finally(() => {
      loading.off();
    });

  refs.formSignUp.reset();
}

//Зайти в кабінет
export async function authSignInUser(event) {
  event.preventDefault();

  const {
    email: { value: email },
    password: { value: password },
  } = event.target;

  if (!email || !password) return showNotificashka('noValidForm');
  blockSreen();
  loading.on();
  await signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      FireBaseApi.changeCurrentUser(user);

      FireBaseApi.authSuccess(user);
      openSignInModal();

      showNotificashka('signInSuccess', user);
    })
    .catch(error => {
      const errorMessage = error.message.split(': ')[1];
      showNotificashka('signInFaild', errorMessage);
    })
    .finally(() => {
      blockSreen();
      loading.off();
    });

  // event.currentTarget.reset();
}

//функція для роботи з формою
function clearFormData(obj) {
  for (const key in obj) {
    delete obj[key];
  }
  localStorage.removeItem(FORM_STORAGE_KEY);
}

function addFormFields(event) {
  if (event.target.name !== 'email') return;
  formData[event.target.name] = event.target.value;
  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
}

function getStorageDataSignIn() {
  formData = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY));
  if (formData) {
    setFormFieldsSignIn(formData);
  } else {
    formData = {};
  }
}

function getStorageDataSignUp() {
  formData = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY));
  if (formData) {
    setFormFieldsSignUp(formData);
  } else {
    formData = {};
  }
}

function setFormFieldsSignIn(obj) {
  for (const key in obj) {
    if (key === 'agreement') continue;
    refs.formSignIn[key].value = obj[key];
  }
}

function setFormFieldsSignUp(obj) {
  for (const key in obj) {
    if (key === 'agreement') continue;
    refs.formSignUp[key].value = obj[key];
  }
}

//заповнити форму з локал сторедж
window.addEventListener('load', getStorageDataSignIn);
window.addEventListener('load', getStorageDataSignUp);

//===================

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCFrUsAa2GnJsQSsnbY7n2RsUa4nEwcnLw',
  authDomain: 'test-accaunts.firebaseapp.com',
  databaseURL: 'https://test-accaunts-default-rtdb.firebaseio.com',
  projectId: 'test-accaunts',
  storageBucket: 'test-accaunts.appspot.com',
  messagingSenderId: '438814438695',
  appId: '1:438814438695:web:19b67e8971090cb7cda502',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser,
} from 'firebase/auth';

const auth = getAuth();

export function showNotificashka(code, data) {

  if (data === 'Error (auth/user-not-found).') {
    data = 'Enter the correct login';
  } else if (data === 'Error (auth/wrong-password).') {
    data = 'Enter the correct password';
  } else if (
    data === 'Password should be at least 6 characters (auth/weak-password).'
  ) {
    data = 'Password should be at least 6 characters';
  } else if (data === 'Error (auth/email-already-in-use).') {
    data = 'User already registered';
  }

  switch (code) {
    case 'registerSuccess':
      renderNotifix(
        `${data.email} register was success and you have been sign in`,
        'info'
      );
      break;
    case 'registerFaild':
      renderNotifix(`${data}`, 'rupor');
      break;
    case 'signInSuccess':
      renderNotifix(`${data.email} you have been sign in`, 'info');
      break;
    case 'signInFaild':
      renderNotifix(`${data}`, 'rupor');
      break;
    case 'noValidForm':
      renderNotifix('Please, fill all form fields', 'info');
      break;
    case 'logOut':
      renderNotifix(`${data} was loged out`, 'rupor');
      break;
    default:
      break;
  }
}
