const { pad } = require('lodash');
import {
  openSignUpModal,
  openGreetingsModal,
  openSignInModal,
} from './register-modal';
import { FireBaseApi } from './fireBaseApi';

const refs = {
  formSignIn: document.querySelector('#form-sign-in'),
  formSignUp: document.querySelector('#form-sign-up'),
};

let userName;
const FORM_STORAGE_KEY = 'register-form-state';

let formData = {};

refs.formSignIn.addEventListener('submit', authSignInUser);
refs.formSignUp.addEventListener('submit', authSignUpUser);

refs.formSignIn.addEventListener('input', addFormFields);
refs.formSignUp.addEventListener('input', addFormFields);

async function authSignUpUser(event) {
  event.preventDefault();

  if (!formData['mail'] || !formData['password']) {
    return alert('Please, fill all form fields');
  }

  localStorage.removeItem(FORM_STORAGE_KEY);
  console.log(formData);
  event.currentTarget.reset();
  clearFormData(formData);

  userName = await event.target.querySelector('#user-name').value;
  const email = await event.target.querySelector('#user-email-register').value;
  const password = await event.target.querySelector('#user-password-register')
    .value;

  await registerUser(email, password, userName)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert(data.error.message);
      } else {
        console.log('It*s ok!');
        // FireBaseApi.authSuccess(userName);
        FireBaseApi.authSuccess(data);
        openGreetingsModal();
        openSignUpModal();
      }
    });
}

export async function authSignInUser(event) {
  event.preventDefault();

  if (!formData['mail'] || !formData['password']) {
    return alert('Please, fill all form fields');
  }

  localStorage.removeItem(FORM_STORAGE_KEY);
  console.log(formData);
  event.currentTarget.reset();
  clearFormData(formData);

  const email = event.target.querySelector('#user-email').value;
  const password = event.target.querySelector('#user-password').value;

  await authWithEmailAndPassword(email, password)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert(data.error.message);
      } else {
        console.log('It*s ok!');
        FireBaseApi.authSuccess(data);
        console.log(data);
        openSignInModal();
      }
    });
}

export async function authWithEmailAndPassword(email, password) {
  const apiKey = 'AIzaSyAysL6D0-x9xs_8XCW-NbLtbtHl5P6b3V0';
  return await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,

    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

export async function registerUser(email, password, name) {
  const apiKey = 'AIzaSyAysL6D0-x9xs_8XCW-NbLtbtHl5P6b3V0';
  return await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
    {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        name,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

function clearFormData(obj) {
  for (const key in obj) {
    delete obj[key];
  }
}

function addFormFields(event) {
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
    refs.formSignIn[key].value = obj[key];
  }
}

function setFormFieldsSignUp(obj) {
  for (const key in obj) {
    refs.formSignUp[key].value = obj[key];
  }
}

window.addEventListener('load', getStorageDataSignIn);
window.addEventListener('load', getStorageDataSignUp);
