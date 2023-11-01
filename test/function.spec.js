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
  it('debería resolver la promesa con un usuario en caso de éxito', async () => {
    const fakeUser = { email: "catgram23@gmail.com", password: "123456" };

    // Simula el comportamiento de signInWithPopup con un usuario simulado
    const signInWithPopupMock = jest.fn(() => Promise.resolve({fakeUser}));
    
    // Mock de GoogleAuthProvider
    const GoogleAuthProviderMock = jest.fn(() => ({
      addScope: jest.fn(),
      setCustomParameters: jest.fn(),
    }));


    const result = await myauth.logInGoogle({ GoogleAuthProviderMock, signInWithPopupMock });

    expect(result).toEqual(fakeUser);
  });

  it('debería rechazar la promesa en caso de error', async () => {
    const fakeError = new Error('Error simulado');

    // Simula el comportamiento de signInWithPopup con un error simulado
    const signInWithPopupMock = jest.fn(() => Promise.reject(fakeError));

    // Mock de GoogleAuthProvider
    const GoogleAuthProvider = jest.fn(() => ({
      addScope: jest.fn(),
      setCustomParameters: jest.fn(),
    }));

    // Mock de auth
    const auth = {
      // Define tus métodos mock de auth si es necesario
    };

    try {
      await myauth.logInGoogle({ GoogleAuthProviderMock, signInWithPopupMock });
    } catch (error) {
      expect(error).toEqual(fakeError);
    }
  });
});