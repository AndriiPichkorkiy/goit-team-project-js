const { pad } = require('lodash');
import {
  openSignUpModal,
  openGreetingsModal,
  openSignInModal,
} from './register-modal';

export let userName;

export function authSignUpUser(event) {
  event.preventDefault();

  userName = event.target.querySelector('#user-name').value;
  const email = event.target.querySelector('#user-email-register').value;
  const password = event.target.querySelector('#user-password-register').value;
  console.log(email, password, userName);

  registerUser(email, password, userName)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert(data.error.message);
      } else {
        console.log('It*s ok!');
      }
    });

  openSignUpModal();
  openGreetingsModal();
}

export function authSignInUser(event) {
  event.preventDefault();

  const email = event.target.querySelector('#user-email').value;
  const password = event.target.querySelector('#user-password').value;
  console.log(email, password);
  authWithEmailAndPassword(email, password);
}

// create modal form
// function getAuthFormHTML() {
//   return ``;
// }

async function authWithEmailAndPassword(email, password) {
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
  )
    .then(response => response.json())
    .then(data => console.log(data));
}

async function registerUser(email, password, name) {
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
