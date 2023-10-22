// Este es el punto de entrada de tu aplicacion
import { createPost } from './views/createPost.js';
import { renderRegister } from './views/register.js';
import { renderWall } from './views/wall.js';
import { renderWelcome } from './views/welcome.js';
import { renderError } from './views/error.js';

const routes = [
  { path: '/', component: renderWelcome },
  { path: '/registro', component: renderRegister },
  { path: '/muro', component: renderWall },
  { path: '/crear_post', component: createPost },
  { path: '/error', component: renderError },
];

const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(path) {
  const route = routes.find((routeFound) => routeFound.path === path);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component());
  } else {
    navigateTo('/error');
  }
}
window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

window.addEventListener('navigateTo', (event) => {
  navigateTo(event.detail);
});

if (window.location.pathname === '/') {
  navigateTo('/');
} else {
  navigateTo(defaultRoute);
}

// navigateTo(window.location.pathname || defaultRoute);
