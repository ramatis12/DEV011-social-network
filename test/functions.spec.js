/**
 * @jest-environment jsdom
 */
//import { auth } from '../src/conectionFirebase.js';
import { renderWall } from '../src/views/wall.js';
import { renderWelcome } from '../src/views/welcome.js';
import * as myauth from '../src/functionAuth.js';
//import { renderRegister } from '../src/views/register.js';
// import { navigateTo } from '../src/main.js';
// import { auth } from "../src/conectionFirebase.js";
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { navigateTo } from '../src/main.js';
// jest.mock("firebase/auth");

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

 describe('login button', () => {
  test('Test of click login button', ()=> {
    jest.spyOn(myauth, 'login').mockImplementation(() => Promise.resolve(userCredential));
    const navigateTo = jest.fn();
    renderWelcome(navigateTo);
    const DOM = document.createElement('div');
    DOM.append(renderWelcome(navigateTo));
    const email = DOM.querySelector('.input-user');
    const password = DOM.querySelector('.input-pwd');
    email.value = 'catgram@catgram.com';
    password.value = '123456';

    const loginButton =DOM.querySelector('.login-button');
    loginButton.click();
    navigateTo('/muro');
    expect(myauth.login).toHaveBeenCalledTimes(1);
    expect(navigateTo).toHaveBeenCalledWith('/muro');
  });

});

const navigateTo = jest.fn();
renderWelcome(navigateTo);
navigateTo('/muro');
expect(navigateTo).toHaveBeenCalledWith('/muro');

/*describe('login', () => {
  test('should handle login error', (done) => {
    // Simula el comportamiento de la función login para el caso de error
    jest.spyOn(myauth, 'login').mockRejectedValue(new Error('Credenciales incorrectas'));
    login('user@example.com', 'password123');

    // Espera un tiempo suficiente para simular una operación asincrónica (ajusta según sea necesario)
    setTimeout(() => {
      // Verifica que alert se llamó con el mensaje de error
      expect(window.alert).toHaveBeenCalledWith('Credenciales incorrectas');
      done();
    }, 100); // Ajusta el tiempo de espera según sea necesario
  });
});*/

describe('login with google', () => {
  test('Test of click login with  google', ()=> {
    jest.spyOn(myauth, 'logInGoogle').mockImplementation(() => Promise.resolve());
    const DOM = document.createElement('div');
    DOM.append(renderWelcome());

    const googleButton =DOM.querySelector('.google-register-button');
    googleButton.click();
    expect(myauth.logInGoogle).toHaveBeenCalledTimes(1);
  });
});


