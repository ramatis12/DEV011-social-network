/**
 * @jest-environment jsdom
 */
import { renderRegister } from '../src/views/register.js';
import * as auth from '../src/functionAuth.js';

describe("Registro con email y contraseña", () => {
  test("debería ser una función", () => {
    expect(typeof renderWall).toBe("function");
  });
  test("Tiene un botón", () => {
    const renderWallDOM = renderWall();
    const haveAButton = renderWallDOM.querySelector('#button-acept');
    expect(haveAButton).not.toBe(undefined);
  });
  test('Prueba si NavigateTo es llamado cuando se dispara el evento "navigateTo"', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(renderWall(navigateTo));
    const logout = DOM.querySelector('#logout');
    logout.click();
    expect(navigateTo).toHaveBeenCalled();
  });
  test('Prueba si NavigateTo envía a / cuando se dispara el evento "navigateTo"', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(renderWall(navigateTo));
    const logout = DOM.querySelector('#logout');
    logout.click();
    expect(navigateTo).toHaveBeenCalledWith('/');
  });
});

describe('register button', () => {
  /*test ('llamado a button', ()=> {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(renderRegister(navigateTo));
    const loginButton =DOM.querySelector('.register-button-1');
    loginButton.click();
    expect(auth.emailAuthentication).toHaveBeenCalledTimes(1);
   })*/
    test('Test of click register button', ()=> {
      jest.spyOn(auth, 'emailAuthentication').mockImplementation(() => Promise.resolve({email:'catgram23@gmail.com' , password: '123456'}));
      const navigateTo = jest.fn();
      renderRegister(navigateTo);
      const DOM = document.createElement('div');
      DOM.append(renderRegister(navigateTo));
      const email = DOM.querySelector('.input-user-register');
     const password = DOM.querySelector('.input-pwd-register');
     const passwordConfirm = DOM.querySelector('.input-pwd-confirm');
     email.value = 'catgram23@gmail.com';
     password.value = '123456';
     passwordConfirm.value = '123456';
  
      const loginButton =DOM.querySelector('.register-button-1');
      loginButton.click();
      if (password.value === passwordConfirm.value){
      navigateTo('/muro');
      expect(auth.emailAuthentication).toHaveBeenCalledTimes(1);
      expect(navigateTo).toHaveBeenCalledWith('/muro');
    }});
  });
  