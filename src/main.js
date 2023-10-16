// Este es el punto de entrada de tu aplicacion
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import { renderWelcome } from './welcome.js';
import { renderRegister } from './register.js';
import { db } from './firebase.js';


//------------------- Selectores Dom---------------------
const root = document.querySelector('#root');
root.appendChild(renderWelcome());
const buttonLogin = document.querySelector('.login-button');
const googleButton = document.querySelector('.google-register-button');
const registerButtonWelcome = document.querySelector('.register-button');

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

const newView = renderRegister();

//--------------------- Boton para registrar un nuevo usuario-----------------------------------------
registerButtonWelcome.addEventListener('click', (e) => {
  root.innerHTML = '';
  root.appendChild(newView);
});

const registerButton = newView.querySelector('.register-button-1');
console.log(registerButton);

//------------------ Autentificacion con correo --------------------------------------------
registerButton.addEventListener('click', (e) => {
  const auth = getAuth();
  const email = document.querySelector('.input-user-register').value;
  const password = document.querySelector('.input-pwd-register').value;
  // const passwordConfirm = document.querySelector('.input-pwd-confirm').value;
  // const date = document.querySelector('.input-date').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((currentUser) => {
      const user = currentUser.user;
      const userId = user.uid;
      const userEmail = user.email;
      alert(`Usuario creado${user}`);

      const usersCollection = collection(db, 'users');
      const userDoc = doc(usersCollection, userId);

      const userData = {
        name: userEmail,
        ID: userId,
        email: userEmail,
      };

      return setDoc(userDoc, userData);
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