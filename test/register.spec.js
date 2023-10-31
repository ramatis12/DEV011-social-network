import { renderRegister } from '../src/views/register.js';
import * as myauth from '../src/functionAuth.js';

describe('register button', () => {
    test('Test of click register button', ()=> {
      jest.spyOn(myauth, 'emailAuthentication').mockImplementation(() => Promise.resolve());
      const navigateTo = jest.fn();
      renderRegister(navigateTo);
      const DOM = document.createElement('div');
      DOM.append(renderRegister(navigateTo));
      const email = DOM.querySelector('.input-user-register');
      const password = DOM.querySelector('.input-pwd-register');
      email.value = 'catgram23@gmail.com';
      password.value = '123456';
  
      const loginButton =DOM.querySelector('.register-button-1');
      loginButton.click();
      navigateTo('/muro');
      expect(myauth.emailAuthentication).toHaveBeenCalledTimes(1);
      expect(navigateTo).toHaveBeenCalledWith('/muro');
    });
  
  });