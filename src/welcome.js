export const renderWelcome = () => {
  const welcome = document.createElement('form');
  welcome.setAttribute('id', 'welcome');
  welcome.setAttribute('method', 'post');


  const inputUser = document.createElement('input');
  inputUser.setAttribute('type', 'email');
  inputUser.setAttribute('class', 'input-user');
  inputUser.setAttribute('placeholder', 'Correo/Usuario');
  //   inputUser.innerHTML = '';
  welcome.appendChild(inputUser);

  const inputPwd = document.createElement('input');
  inputPwd.setAttribute('type', 'password');
  inputPwd.setAttribute('class', 'input-pwd');
  inputPwd.setAttribute('placeholder', 'Contraseña');
  //   inputPwd.innerHTML = '';
  welcome.appendChild(inputPwd);

  const loginButton = document.createElement('button');
  loginButton.setAttribute('class', 'login-button');
  loginButton.setAttribute('type', 'submit');
  loginButton.textContent = 'Iniciar sesión';
  welcome.appendChild(loginButton);

  const registerButton = document.createElement('button');
  registerButton.setAttribute('class', 'register-button');
  registerButton.setAttribute('type', 'submit');
  registerButton.textContent = 'Registrar';
  welcome.appendChild(registerButton);
  //   console.log(registerButton);

  return welcome;
};
