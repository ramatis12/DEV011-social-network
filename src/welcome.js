export const renderWelcome = () => {
  const welcome = document.createElement('form');
  welcome.setAttribute('id', 'welcome');
  welcome.setAttribute('method', 'GET');


  const inputUser = document.createElement('input');
  inputUser.setAttribute('type', 'email');
  inputUser.classList.add('input-user');
  inputUser.setAttribute('placeholder', 'Correo/Usuario');
  inputUser.value = '';
  //   inputUser.innerHTML = '';
  welcome.appendChild(inputUser);

  const inputPwd = document.createElement('input');
  inputPwd.setAttribute('type', 'password');
  inputPwd.classList.add('input-pwd');
  inputPwd.setAttribute('placeholder', 'Contraseña');
  inputPwd.value = '';
  //   inputPwd.innerHTML = '';
  welcome.appendChild(inputPwd);

  const loginButton = document.createElement('button');
  loginButton.setAttribute('class', 'login-button');
  //loginButton.setAttribute('type', 'submit');
  loginButton.textContent = 'Iniciar sesión';
  welcome.appendChild(loginButton);

  const registerButton = document.createElement('button');
  registerButton.setAttribute('class', 'register-button');
  //registerButton.setAttribute('type', 'submit');
  registerButton.textContent = 'Registrar';
  welcome.appendChild(registerButton);
  //   console.log(registerButton);

  return welcome;
};
