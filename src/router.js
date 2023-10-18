import { renderWelcome } from './welcome.js';
import { renderRegister } from './register.js';
//import { renderWall } from './wall.js';
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