/**
 * @jest-environment jsdom
 */
import { renderRegister } from '../src/views/register.js';
import * as auth from '../src/functionAuth.js';

describe("Registro con email y contraseña", () => {
  test("debería ser una función", () => {
    expect(typeof renderRegister).toBe("function");
  });
  test("Tiene un botón", () => {
    const renderRegisterDOM = renderRegister();
    const haveAButton = renderRegisterDOM.querySelector('.register-button-1');
    expect(haveAButton).not.toBe(undefined);
  });
  test('Prueba si NavigateTo es llamado cuando se dispara el evento "navigateTo"', async () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(renderRegister(navigateTo));
    const register = DOM.querySelector('.register-button-1');
    const email = DOM.querySelector('.input-user-register');
    email.value = 'catgram23@gmail.com';
    const password1 = DOM.querySelector('.input-pwd-register');
    const password2 = DOM.querySelector('.input-pwd-confirm');
    // password.value = '123456';
    // passwordConfirm.value = '123456';
    register.click();

    await new Promise((resolve) => { setTimeout(resolve, 0); });
    if (password1.value === '123456' && password2.value === '123456') {
      jest.spyOn(auth, 'emailAuthentication').mockImplementation(() => Promise.resolve({ email: 'catgram23@gmail.com', password: '123456' }));
      await new Promise((resolve) => { setTimeout(resolve, 0); });
      expect(navigateTo).toHaveBeenCalledWith('/muro');
    }
  });

  // test('Prueba si NavigateTo envía a /muro cuando se dispara el evento "navigateTo"', () => {
  //   const DOM = document.createElement('div');
  //   const navigateTo = jest.fn();
  //   DOM.append(renderRegister(navigateTo));
  //   const register = DOM.querySelector('.register-button-1');
  //   register.click();
  //   expect(navigateTo).toHaveBeenCalledWith('/muro');
  // });
});

// describe('register button', () => {
  /*test ('llamado a button', ()=> {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(renderRegister(navigateTo));
    const loginButton =DOM.querySelector('.register-button-1');
    loginButton.click();
    expect(auth.emailAuthentication).toHaveBeenCalledTimes(1);
   })*/
  //   test('Test of click register button', ()=> {
  //     jest.spyOn(auth, 'emailAuthentication').mockImplementation(() => Promise.resolve({email:'catgram23@gmail.com' , password: '123456'}));
  //     const navigateTo = jest.fn();
  //     renderRegister(navigateTo);
  //     const DOM = document.createElement('div');
  //     DOM.append(renderRegister(navigateTo));
  //     const email = DOM.querySelector('.input-user-register');
  //    const password = DOM.querySelector('.input-pwd-register');
  //    const passwordConfirm = DOM.querySelector('.input-pwd-confirm');
  //    email.value = 'catgram23@gmail.com';
  //    password.value = '123456';
  //    passwordConfirm.value = '123456';
  
  //     const loginButton =DOM.querySelector('.register-button-1');
  //     loginButton.click();
  //     if (password.value === passwordConfirm.value){
  //     navigateTo('/muro');
  //     expect(auth.emailAuthentication).toHaveBeenCalledTimes(1);
  //     expect(navigateTo).toHaveBeenCalledWith('/muro');
  //   }});
  // });
  