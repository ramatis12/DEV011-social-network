// Este es el punto de entrada de tu aplicacion
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { renderWelcome } from './welcome.js';
//import { renderRegister } from './register.js';
//import { db } from './firebase.js';


//------------------- Selectores Dom---------------------
const root = document.querySelector('#root');
root.appendChild(renderWelcome());
const buttonLogin = document.querySelector('.login-button');
const googleButton = document.querySelector('.google-register-button');
const registerButtonWelcome = document.querySelector('.register-button');


//------------------ Autentificacion con correo --------------------------------------------
buttonLogin.addEventListener('click', (e) => {
  const auth = getAuth();
  const email = document.querySelector('.input-user').value;
  const password = document.querySelector('.input-pwd').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((currentUser) => {
      const user = currentUser.user;
      alert(`Usuario creado${user}`);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;      
        // if(errorCode == 'auth/email-already-in-use')
        //     alert('El correo ya está en uso');
        // else if (errorCode == 'auth/invalid-email')
        //     alert ('El correo no es válido');
        // else if (errorCode == 'auth/weak-password')
        //     alert ('La contraseña debe tener al menos 6 caracteres')
    })
});

//--------------------------- Autentificacion con Google-------------------------------------------------
const googleProvider = new GoogleAuthProvider();
googleButton.addEventListener('click', e =>{
  const auth = getAuth();
signInWithPopup(auth, googleProvider)
.then((result) => {
  // El usuario ha iniciado sesión con Google exitosamente.
  const user = result.user;
  console.log('Usuario autenticado:', user);
})
.catch((error) => {
  // Ocurrió un error durante el proceso de inicio de sesión.
  console.error('Error de autenticación con Google:', error);
});
});

//--------------------- Boton para registrar un nuevo usuario-----------------------------------------
registerButtonWelcome.addEventListener('click', (e) => {
  root.innerHTML = '';
  root.appendChild(renderRegister());
});