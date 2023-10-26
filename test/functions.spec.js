/**
 * @jest-environment jsdom
 */
import { emailAuthentication } from '../src/functionAuth.js';

describe('Registro con email y contraseña', () => {
  it('debería ser una función', () => {
    expect(typeof emailAuthentication).toBe('function');
  });
});
test('Tiene un botón', () => {
  const DOM = document.createElement('div');
  DOM.append(emailAuthentication());
  const haveAButton = DOM.querySelector('.login-button');
  expect(haveAButton).not.toBe(undefined);
});
