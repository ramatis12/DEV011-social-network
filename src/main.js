// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';
import { renderWelcome } from './welcome.js';
import { db } from "./firebase.js";
//import { createUserWithEmailAndPassword, auth } from './auth.js';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

console.log(db);

const root = document.querySelector('#root');
root.appendChild(renderWelcome());

// const email = document.querySelector(".input-user");
// const emailInput = email.value;
// console.log (emailInput);




const buttonLogin = document.querySelector('.login-button');

buttonLogin.addEventListener('click', (e) => {

  const auth = getAuth();
  console.log (getAuth());

const email = document.querySelector(".input-user").value;
 console.log (email);

const password = document.querySelector('.input-pwd').value; 
console.log (password);

createUserWithEmailAndPassword(auth, email, password)
.then((currentUser) => {
        const user = currentUser.user;
        alert("Usuario creado" + user);
    })
    .catch((error) => {
        const errorCode = error.code;
        
        if(errorCode == 'auth/email-already-in-use')
            alert('El correo ya está en uso');
        else if (errorCode == 'auth/invalid-email')
            alert ('El correo no es válido');
        else if (errorCode == 'auth/weak-password')
            alert ('La contraseña debe tener al menos 6 caracteres');

    })

  //createUserWithEmailAndPassword()
});

// root.appendChild
// myFunction();
