/**
 * @jest-environment jsdom
 */
import { emailAuthentication, login, onAuthStateChanged } from '../src/functionAuth.js';
// import { navigateTo } from '../src/main.js';
import { auth } from "../src/conectionFirebase.js";
import { signInWithEmailAndPassword } from 'firebase/auth';
jest.mock("firebase/auth"); 

describe("Registro con email y contraseña", () => {
  it("debería ser una función", () => {
    expect(typeof emailAuthentication).toBe("function");
  });
});
test("Tiene un botón", () => {
  const DOM = document.createElement("div");
  DOM.append(emailAuthentication());
  const haveAButton = DOM.querySelector(".register-button-1");
  expect(haveAButton).not.toBe(undefined);
});

/* test('Prueba si NavigateTo es llamado cuando se dispara el evento "navigateTo"', async () => {
  const DOM = document.createElement('div');
  document.body.appendChild(DOM);
  const loginButton = document.createElement('button');
  loginButton.className = 'login-button';
  loginButton.addEventListener('click', () => {
    navigateTo.NavigateTo('/muro');
  });
  DOM.appendChild(loginButton);
  const navigateToMock = jest.spyOn(navigateTo, 'NavigateTo');
  DOM.querySelector('.login-button').dispatchEvent(new Event('click'));
  expect(navigateToMock).toHaveBeenCalledWith('/muro');
  navigateToMock.mockRestore();
  document.body.removeChild(DOM);
}); */

test('Prueba si NavigateTo es llamado cuando se dispara el evento "navigateTo"', async () => {
  const DOM = document.createElement("div");
  DOM.innerHTML = login();
  document.body.appendChild(DOM);
  const loginButton = DOM.querySelector(".button");
  const navigateToMock = jest.spyOn(window, "dispatchEvent");
  const expectedRoute = "/muro";
  const loginPromise = Promise.resolve(expectedRoute);
  // const mockSignInWithEmailAndPassword = jest.fn();
  

  signInWithEmailAndPassword.mockResolvedValue({
    user: { uid: "usuario-id", email: "usuario@correo.com" },
  });
  loginButton.click();
  await loginPromise;
  expect(navigateToMock).toHaveBeenCalledWith(
    new CustomEvent("navigateTo", { detail: expectedRoute })
  );
  navigateToMock.mockRestore();
  auth.signInWithEmailAndPassword.mockRestore();
  document.body.removeChild(DOM);
});
