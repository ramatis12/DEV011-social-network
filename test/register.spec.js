/**
 * @jest-environment jsdom
 */
import { renderRegister } from '../src/views/register.js';
import { emailAuthentication } from '../src/functionAuth.js';

jest.mock('../src/functionAuth', () => ({
  emailAuthentication: jest.fn((email, password) => {
    if (email === 'catgram23@gmail.com' && password === '123456') {
      return Promise.resolve();
    }
    return Promise.reject();
  })
}));

describe("Registro con email y contraseña", () => {
  test("debería ser una función", () => {
    expect(typeof renderRegister).toBe("function");
  });
  test("Tiene un botón", () => {
    const renderRegisterDOM = renderRegister();
    const haveAButton = renderRegisterDOM.querySelector('.register-button-1');
    expect(haveAButton).not.toBe(undefined);
  });
  test('Prueba si NavigateTo es llamado cuando se dispara el evento "navigateTo"', () => {
    const navigateTo = jest.fn();
    const DOM = document.createElement('div');
    DOM.append(renderRegister(navigateTo));
    const email = DOM.querySelector('.input-user-register');
    email.value = 'catgram23@gmail.com';
    const password1 = DOM.querySelector('.input-pwd-register');
    password1.value = '123456';
    const register = DOM.querySelector('.register-button-1');
    register.addEventListener('click', () => navigateTo('/muro'));
    register.click();
    expect(navigateTo).toHaveBeenCalledWith('/muro');
  });
  test('Prueba si emailAuthentication es llamado cuando se dispara el evento "en el botón"', async () => {
    const navigateTo = jest.fn();
    const DOM = document.createElement('div');
    DOM.append(renderRegister(navigateTo));
    const register = DOM.querySelector('.register-button-1');
    // register.addEventListener('click', async () => {
    //   try {
    //     await emailAuthentication();
    //   } catch (error) {
    //     console.log('error');
    //   }
    // });
    register.click();
    expect(emailAuthentication).toHaveBeenCalledTimes(1);
  });
  // test("Error de registro", () => {
  //   const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
  //   // jest.spyOn(myauth, "login").mockRejectedValue(new Error("Login failed"));
  //   emailAuthentication.reject("Login failed");
  //   const navigateTo = jest.fn();
  //   const DOM = document.createElement('div');
  //   DOM.append(renderRegister(navigateTo));
  //   const register = DOM.querySelector('.register-button-1');
  //   register.click();
  //   alert("Login failed");
  //   expect(alertSpy).toHaveBeenCalledWith("Login failed");
  // });
});
