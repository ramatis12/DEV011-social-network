import {  GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

export function logInGoogle() {
  return new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // El usuario ha iniciado sesión con Google exitosamente.
        const user = result.user;
        console.log('Usuario autenticado:', user);
        resolve(user); // Resolvemos la promesa con el usuario
      })
      .catch((error) => {
        // Ocurrió un error durante el proceso de inicio de sesión.
        console.error('Error de autenticación con Google:', error);
        reject(error); // Rechazamos la promesa con el error
      });
  });
}

export function emailAuthentication(auth, email, password) {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((currentUser) => {
        const user = currentUser.user;
        const userId = user.uid;
        const userEmail = user.email;
        alert(`Usuario creado ${ user }`);
        resolve (user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('error al registrar usuario', error);
        alert(errorCode);
        alert(errorMessage);
        // if(errorCode == 'auth/email-already-in-use'){
        //   alert('El correo ya está en uso');
        // } else if (errorCode == 'auth/invalid-email'){
        //   alert ('El correo no es válido');
        // } else if (errorCode == 'auth/weak-password'){
        //   alert ('La contraseña debe tener al menos 6 caracteres')
        // }
        // });
        reject(error);
      });
  });
}

// .then((result) => {
//     // El usuario ha iniciado sesión con Google exitosamente.
//     const user = result.user;
//     console.log('Usuario autenticado:', user);
//   })
//   .catch((error) => {
//     // Ocurrió un error durante el proceso de inicio de sesión.
//     console.error('Error de autenticación con Google:', error);
//   });

// const auth = firebase.auth();

// const provider = new firebase.auth.GoogleAuth();

// export async function login() {
//   try {
//     const response = await auth.signInWithPopup(provider);
//     return response.user;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// export function logout() {
//   auth.signOut();
// }

// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// const auth = getAuth();
// console.log (getAuth());

// const email = document.querySelector(".input-user");
// const emailInput = email.value;
//  console.log (emailInput);

// const password = document.getElementsByClassName('input-pwd').value;
// console.log (password);
// createUserWithEmailAndPassword(auth, password)
// .then((userCredential) => {
//         const user = userCredential.user;
//         console.log("Usuario creado" + user)
//     })
//     .catch((error) => {
//         const errorCode = error.code;

//         if(errorCode == 'auth/email-already-in-use')
//             alert('El correo ya está en uso');
//         else if (errorCode == 'auth/invalid-email')
//             alert ('El correo no es válido');
//         else if (errorCode == 'auth/weak-password')
//             alert ('La contraseña debe tener al menos 6 caracteres');

//     })

//     export {createUserWithEmailAndPassword, auth};
