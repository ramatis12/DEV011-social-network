// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';
import { renderWelcome } from './welcome.js';
import { login, logout } from './auth.js';

const root = document.querySelector('#root');
// const [inputUser, inputPwd, loginButton, registerButton] = renderWelcome();

// root.appendChild(inputUser);
// root.appendChild(inputPwd);
// root.appendChild(loginButton);
// root.appendChild(registerButton);

root.appendChild(renderWelcome());

const buttonLogin = document.querySelector('.login-button');

buttonLogin.addEventListener('click', async (e) => {
  try {
    await login();
  } catch (error){}
});

// root.appendChild
// myFunction();
