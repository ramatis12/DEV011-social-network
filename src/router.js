import { renderWelcome } from './views/welcome.js';
import { renderRegister } from './views/register.js';
import { renderEditProfile } from './views/editProfile.js';

export function router() {
  const root = document.querySelector('#root');
  const path = window.location.pathname;

  if (path === '/register') {
    root.innerHTML = '';
    root.appendChild(renderRegister());
  } else if (path === '/wall') {
    root.innerHTML = '';
    root.appendChild(renderEditProfile());
  } else if (path === '/welcome') {
    root.innerHTML = '';
    root.appendChild(renderWelcome());
  }
}