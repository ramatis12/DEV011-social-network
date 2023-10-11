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