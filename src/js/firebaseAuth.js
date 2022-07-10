const { pad } = require('lodash');
import {
  openSignUpModal,
  openGreetingsModal,
  openSignInModal,
} from './register-modal';
import { FireBaseApi } from './fireBaseApi';

export async function authSignUpUser(event) {
  event.preventDefault();

  // if (!formData['user-mail'] || !formData['user-password']) {
  //   return alert('Please, fill all form fields');
  // }

  // localStorage.removeItem(FORM_STORAGE_KEY);
  // console.log(formData);
  // event.currentTarget.reset();
  // clearFormData(formData);

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

  // if (!formData['user-mail'] || !formData['user-password']) {
  //   return alert('Please, fill all form fields');
  // }

  // localStorage.removeItem(FORM_STORAGE_KEY);
  // console.log(formData);
  // event.currentTarget.reset();
  // clearFormData(formData);

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

// create modal form
// function getAuthFormHTML() {
//   return ``;
// }

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

// function fetch(token) {
//   if (token) {
//     return Promise.resolve('Erorr!');
//   }
//   return console.log('get info');
//   //return fetch(link/${token}).then(response => response.json).
//   // then(list of info => console.log(lsit of info))
// }

// Authorization
// {
// 'rules': { '.read: 'auth != null', '.write':true}
// }

// function renderModalAfterAuth(content) {
//   console.log(content);
// }
