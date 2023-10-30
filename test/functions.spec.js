/**
 * @jest-environment jsdom
 */
import { renderWall } from '../src/views/wall.js';
// import { emailAuthentication, login } from '../src/functionAuth.js';
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

//   document.body.appendChild(DOM);
//   const loginButton = document.createElement('button');
//   loginButton.className = 'login-button';
//   loginButton.addEventListener('click', () => {
//     navigateTo.NavigateTo('/muro');
//   });
//   DOM.appendChild(loginButton);
//   const navigateToMock = jest.spyOn(navigateTo, 'NavigateTo');
//   DOM.querySelector('.login-button').dispatchEvent(new Event('click'));
//   expect(navigateToMock).toHaveBeenCalledWith('/muro');
//   navigateToMock.mockRestore();
//   document.body.removeChild(DOM);
// });

// test('Prueba si NavigateTo es llamado cuando se dispara el evento "navigateTo"', async () => {
//   const DOM = document.createElement("div");
//   DOM.innerHTML = login();
//   document.body.appendChild(DOM);
//   const loginButton = DOM.querySelector(".login-button");
//   const navigateToMock = jest.spyOn(window, "dispatchEvent");
//   const expectedRoute = "/muro";
//   const loginPromise = Promise.resolve(expectedRoute);
//   // const mockSignInWithEmailAndPassword = jest.fn();
  

//   signInWithEmailAndPassword.mockResolvedValue({
//     user: { uid: "usuario-id", email: "usuario@correo.com" },
//   });
//   loginButton.click();
//   await loginPromise;
//   expect(navigateToMock).toHaveBeenCalledWith(
//     new CustomEvent("navigateTo", { detail: expectedRoute })
//   );
//   navigateToMock.mockRestore();
//   auth.signInWithEmailAndPassword.mockRestore();
//   document.body.removeChild(DOM);
// });
