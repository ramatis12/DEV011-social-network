import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from 'firebase/auth';
import { auth, db } from './conectionFirebase.js';
import {collection, addDoc, getDocs, onSnapshot, orderBy, query, doc, deleteDoc} from 'firebase/firestore';

// import { router } from './router.js';

export function logInGoogle() {
  return new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // El usuario ha iniciado sesión con Google exitosamente.
        const user = result.user;
        console.log('Usuario autenticado:', user);
        resolve('/muro'); // Resolvemos la promesa con el usuario
      })
      .catch((error) => {
        // Ocurrió un error durante el proceso de inicio de sesión.
        console.error('Error de autenticación con Google:', error);
        reject(error); // Rechazamos la promesa con el error
      });
  });
}

export function emailAuthentication(email, password) {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((currentUser) => {
        const user = currentUser.user;
        const userId = user.uid;
        const userEmail = user.email;
        alert(`Usuario creado ${ user }`);
        resolve('/muro');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('error al registrar usuario', error);
        if (errorCode === 'auth/email-already-in-use') {
          alert('El correo ya está en uso', errorMessage);
        } else if (errorCode === 'auth/invalid-email') {
          alert('El correo no es válido', errorMessage);
        } else if (errorCode === 'auth/invalid-password') {
          alert('La contraseña debe tener al menos 6 caracteres', errorMessage);
        }
        reject(error);
      });
  });
}

export function login(email, password) {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, 'desde el then');
        resolve('/muro');
      // resolve(user);
      // return user
      }) // ...
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/user-not-found') {
        // El usuario no está registrado, muestra una alerta y redirige a la página de registro.
          alert('Usuario no registrado. Por favor, regístrate.');
          window.dispatchEvent(new CustomEvent('navigateTo', { detail: '/registro' }));
        } else {
        // Otro tipo de error, puedes manejarlo de acuerdo a tus necesidades.
          console.error('Error en el inicio de sesión:', errorMessage);
        // Aquí podrías mostrar una alerta personalizada si lo deseas.
        }
        reject(error);
      });
  });
}

const postCollection = collection(db, 'posts');
export const addPost = (text, imagen) => {
  const user = auth.currentUser;
  const userEmail = user.email;
  addDoc(postCollection, {
    text, email:userEmail, imagen,
    date: Date.now(),
  });
};

//--------------------------manda a llamar los documentos de la coleccion-------------------------
export const querySnapshot = getDocs(postCollection);

//------------------------ ordena de forma asc todos los post----------------------------------------
const orderPost = query(postCollection, orderBy ('date', 'desc'));



//-------------------eliminar un documento---------------------------------------------------------
 export const deletePost = async (postId) => {
  try {
    const postRef = doc(db, 'posts', postId);
    await deleteDoc(postRef);
    console.log('Documento eliminado con éxito');
  } catch (error) {
    console.error('Error al eliminar el documento:', error);
  }
};
//export const deleteDocPosts = (callback) => onSnapshot( deletePost, callback );
//-------------------------renderiza los post en tiempo real-----------------------------------------
export const paintRealTime = (callback) => onSnapshot( orderPost, callback );



//export const deleteDocPost = deleteDoc(doc(db, postCollection, doc.id))