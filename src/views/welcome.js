import { logInGoogle, login } from '../functionAuth.js';
import { auth } from '../conectionFirebase.js';

export const renderWelcome = () => {
  const divWelcome = document.createElement('div');
  divWelcome.setAttribute('id', 'div-welcome');

  const welcome = document.createElement('form');
  welcome.setAttribute('id', 'welcome');
  welcome.setAttribute('method', 'GET');
  divWelcome.appendChild(welcome);

  const inputUser = document.createElement('input');
  inputUser.setAttribute('type', 'email');
  inputUser.classList.add('input-user');
  inputUser.setAttribute('placeholder', 'Correo/Usuario');
  inputUser.value = '';
  welcome.appendChild(inputUser);

  const inputPwd = document.createElement('input');
  inputPwd.setAttribute('type', 'password');
  inputPwd.classList.add('input-pwd');
  inputPwd.setAttribute('placeholder', 'Contraseña');
  inputPwd.value = '';

  welcome.appendChild(inputPwd);

  const loginButton = document.createElement('button');
  loginButton.setAttribute('class', 'login-button');
  loginButton.setAttribute('data-route' , '/wall');
  loginButton.textContent = 'Ingresar';
  welcome.appendChild(loginButton);
  //loginButton.addEventListener('click', () => {
   // login(auth, inputUser.value, inputPwd.value);
  //});

  const logo = document.createElement('img');
  logo.setAttribute('class', 'img-logo');
  logo.src = './imgs/logo.png';
  divWelcome.appendChild(logo);

  const slogan = document.createElement('h2');
  slogan.setAttribute('class', 'h2-slogan');
  slogan.innerHTML = '"Cada gato tiene una historia.”';
  divWelcome.appendChild(slogan);

  const registerButtonWelcome = document.createElement('button');
  registerButtonWelcome.setAttribute('class', 'register-button');
  registerButtonWelcome.setAttribute('data-route', '/register');
  registerButtonWelcome.textContent = 'Registrarse';
  divWelcome.appendChild(registerButtonWelcome);
  
  const googleRegisterButton = document.createElement('button');
  googleRegisterButton.setAttribute('class', 'google-register-button');
  const googleIcon = document.createElement('img');
  googleIcon.setAttribute('class', 'google-icon');
  googleIcon.src = './imgs/google.png';
  const text = document.createTextNode(' Continuar con Google');
  googleRegisterButton.appendChild(googleIcon);
  googleRegisterButton.appendChild(text);
  divWelcome.appendChild(googleRegisterButton);

  googleRegisterButton.addEventListener('click', () => {
    logInGoogle();
  });
  

  return divWelcome;
};
