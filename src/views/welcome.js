import { logInGoogle, login } from '../functionAuth.js';

export const renderWelcome = () => {
  document.querySelector('header').style.display = 'block';
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
  loginButton.setAttribute('data-route', '/wall');
  loginButton.textContent = 'Ingresar';
  welcome.appendChild(loginButton);

  loginButton.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
      const route = await login(inputUser.value, inputPwd.value);
      if (route) {
        window.dispatchEvent(new CustomEvent('navigateTo', { detail: route }));
      }
    } catch (error) {
      alert('Credenciales incorrectas', error);
      inputUser.value = '';
      inputPwd.value = '';
    }
  });

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

  registerButtonWelcome.addEventListener('click', () => {
    window.dispatchEvent(new CustomEvent('navigateTo', { detail: '/registro' }));
  });

  const googleRegisterButton = document.createElement('button');
  googleRegisterButton.setAttribute('class', 'google-register-button');
  const googleIcon = document.createElement('img');
  googleIcon.setAttribute('class', 'google-icon');
  googleIcon.src = './imgs/google.png';
  const text = document.createTextNode(' Continuar con Google');
  googleRegisterButton.appendChild(googleIcon);
  googleRegisterButton.appendChild(text);
  divWelcome.appendChild(googleRegisterButton);

  googleRegisterButton.addEventListener('click', async () => {
    try {
      const route = await logInGoogle();
      window.dispatchEvent(new CustomEvent('navigateTo', { detail: route }));
    } catch (error) {
      console.error('Error en inico de sesión con Google', error);
    }
  });
  return divWelcome;
};
