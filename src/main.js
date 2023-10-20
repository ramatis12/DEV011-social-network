// Este es el punto de entrada de tu aplicacion
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { renderWelcome } from './views/welcome.js';
import { renderRegister } from './views/register.js';
import { db } from './firebase.js';
import { renderMenu } from './views/menu.js';
import { renderWall } from './views/wall.js';
import { router } from './router.js';
import { login } from './auth.js';

window.addEventListener('load', router);
window.addEventListener('popstate', router);

const auth = getAuth();
// ------------------- Selectores Dom---------------------
const root = document.querySelector('#root');
root.appendChild(renderWelcome());
const buttonLogin = document.querySelector('.login-button');
// const googleButton = document.querySelector('.google-register-button');
const registerButtonWelcome = document.querySelector('.register-button');

// --------------------------- Autentificacion con Google--------------------------
// const googleProvider = new GoogleAuthProvider();
// googleButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   signInWithPopup(auth, googleProvider)
//     .then((result) => {
//       // El usuario ha iniciado sesión con Google exitosamente.
//       const user = result.user;
//       console.log('Usuario autenticado:', user);
//     })
//     .catch((error) => {
//       // Ocurrió un error durante el proceso de inicio de sesión.
//       console.error('Error de autenticación con Google:', error);
//     });
// });
// --------------------- Eventos del router-------------------------------
const email = document.querySelector('.input-user').value;
const password = document.querySelector('.input-pwd').value;
buttonLogin.addEventListener('click', (e) => {
  const target = e.target;
  console.log(location.pathname);
  const route1 = target.getAttribute('data-route');
  
    login(auth, email, password)
      .then((user) => {
        // El usuario ha iniciado sesión exitosamente
        console.log("Usuario ha iniciado sesión:", user);
        if (route1) {
          // eslint-disable-next-line no-restricted-globals
          history.pushState(null, '', route1);
        router(); // Llamamos a "router" después del inicio de sesión
      }
      })

      .catch((error) => {
        // Ocurrió un error en el inicio de sesión
        console.error("Error de inicio de sesión:", error);
      });
    
  }
);
registerButtonWelcome.addEventListener('click', (e) => {
  const target = e.target;
  console.log(location.pathname);
  const route1 = target.getAttribute('data-route');
  if (route1) {
    // eslint-disable-next-line no-restricted-globals
    history.pushState(null, '', route1);
    router();
  }
});
// -----------------------------DOM segunda vista--------------------------------------------
const newView = renderRegister();
// const registerButton = '';
const registerButton = newView.querySelector('.register-button-1');
console.log(location.pathname);

console.log(registerButton);
// if(newView){
//   root.appendChild(renderRegister());
//   registerButton = document.querySelector('.register-button-1');
// console.log(document.querySelector('.register-button-1'));
// }

// // ------------------ Autentificacion con correo --------------------------------------------
// registerButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log('estoy funcionando');
//   const target = e.target;
//   console.log(location.pathname);
//   const route1 = target.getAttribute('data-route');
//   if (route1) {
//     // eslint-disable-next-line no-restricted-globals
//     history.pushState(null, '', route1);
//     router();
//   }
// root.innerHTML = '';
// root.appendChild(renderEditProfile());
// const email = document.querySelector('.input-user-register').value;
// const password = document.querySelector('.input-pwd-register').value;
// const passwordConfirm = document.querySelector('.input-pwd-confirm').value;

// if (password === passwordConfirm) {
//   // const date = document.querySelector('.input-date').value;
//  
//       // const navMenu = document.querySelector('nav');
//       // navMenu.appendChild(renderMenu);
//       // const usersCollection = collection(db, 'users');
//       // // const userDoc = addDoc(usersCollection, userId);

//       // const userData = {
//       //   name: userEmail,
//       //   ID: userId,
//       //   email: userEmail,
//       // };

//       // const agregarDocumento = async () => {
//       //   try {
//       //     const docRef = await addDoc(usersCollection, userData);
//       //     console.log('Documento agregado con ID: ', docRef.id);
//     })

//
// // agregarDocumento();
// // });
// // }
// else {
//   alert('Contraseñas no coinciden');
// }
// });
// -------------------------------------- loggin -----------------------------------------
//buttonLogin.addEventListener('click', (e) => {
 // e.preventDefault();
 // const email = document.querySelector('.input-user').value;
  //const password = document.querySelector('.input-pwd').value;