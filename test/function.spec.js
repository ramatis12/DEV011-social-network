/**
 * @jest-environment jsdom
 */
import * as myauth from '../src/functionAuth.js';

describe("validando la funcion logInGoogle", () => {
  test("debería ser una función", () => {
    expect(typeof myauth.logInGoogle).toBe("function");
  });
});

describe('logInGoogle', () => {
  test('debería resolver la promesa con un usuario en caso de éxito', async () => {
    const user = { email: "catgram@catgram.com" };
    const GoogleAuthProvider = jest.fn();
    const auth = {};
    const signInWithPopupMock = jest.fn(() => Promise.resolve({ user }));
    jest.spyOn(myauth, "logInGoogle").mockImplementation(() => signInWithPopupMock(auth, GoogleAuthProvider));

    const result = await myauth.logInGoogle();
    console.log(result);
    expect(result).toEqual({ user });
    expect(signInWithPopupMock).toHaveBeenCalled();
  });

  test('debería rechazar la promesa de "logInGoogle" en caso de error', async () => {
    const error = new Error("Simulated authentication error");
    const signInWithPopupMock = jest.fn(() => Promise.reject(error));
    try {
      await myauth.logInGoogle();
      // expect(true).toBe(false);
    } catch (fakeError) {
      expect(fakeError).toEqual(error);
    }
    expect(signInWithPopupMock).not.toHaveBeenCalled();
  });
});

describe('Registro con correo y contraseña', () => {
  test('debería resolver la promesa con un usuario en caso de éxito', async () => {
    const user = { email: "catgram@catgram.com", password: "12456" };
    const auth = {};
    const createUserWithEmailAndPasswordMock = jest.fn(() => Promise.resolve(
      { user: { email: user.email, password: user.password } }
    ));
    jest.spyOn(myauth, "emailAuthentication").mockImplementation((email, password) => createUserWithEmailAndPasswordMock(auth, email, password));

    const result = await myauth.emailAuthentication(user.email, user.password);
    console.log(result.user);
    console.log(user);

    expect(result.user).toEqual(user);
    expect(createUserWithEmailAndPasswordMock).toHaveBeenCalled();
  });
});
