export const renderRegister = () => {
  const divRegister = document.createElement("div");
  divRegister.setAttribute("id", "div-register");

  
  const registerForm = document.createElement("form");
  registerForm.setAttribute("id", "register-form");
  registerForm.setAttribute("method", "GET");

  divRegister.appendChild(registerForm);

  const inputUser = document.createElement("input");
  inputUser.setAttribute("type", "email");
  inputUser.classList.add("input-user-register");
  inputUser.setAttribute("placeholder", "Correo/Usuario");
  inputUser.value = "";
  registerForm.appendChild(inputUser);

  const inputPwd = document.createElement("input");
  inputPwd.setAttribute("type", "password");
  inputPwd.classList.add("input-pwd-register");
  inputPwd.setAttribute("placeholder", "Contraseña");
  inputPwd.value = "";
  registerForm.appendChild(inputPwd);


  const inputPwdConfirm = document.createElement("input");
  inputPwdConfirm.setAttribute("type", "password");
  inputPwdConfirm.classList.add("input-pwd-confirm");
  inputPwdConfirm.setAttribute("placeholder", "Confirmar contraseña");
  inputPwdConfirm.value = "";
  registerForm.appendChild(inputPwdConfirm);

  const inputBirthdate = document.createElement("input");
  inputBirthdate.setAttribute("type", "date");
  inputBirthdate.classList.add("input-date");
  inputBirthdate.setAttribute("placeholder", "Fecha de nacimiento");
  inputBirthdate.value = "";

  registerForm.appendChild(inputBirthdate);

  const registerButton = document.createElement('button');
  registerButton.setAttribute('class', 'register-button-1');
  registerButton.textContent = 'Registrarse';
  registerForm.appendChild(registerButton);

  return divRegister
  
};
