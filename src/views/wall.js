import { paintRealTime, deletePost, likePost, editPost } from '../functionAuth.js';

export const renderWall = () => {
  document.querySelector('header').style.display = 'none';

  const divContainer = document.createElement('div');
  divContainer.setAttribute('id', 'div-container');

  const divlogo = document.createElement('div');
  divlogo.setAttribute('id', 'div-logo');
  divContainer.appendChild(divlogo);

  const divMenu = document.createElement('div');
  divMenu.setAttribute('id', 'div-menu');
  divContainer.appendChild(divMenu);

  const postOption = document.createElement('img');
  postOption.setAttribute('id', 'img-post');
  postOption.src = '../imgs/upload pic.png';
  divMenu.appendChild(postOption);

  postOption.addEventListener('click', () => {
    window.dispatchEvent(new CustomEvent('navigateTo', { detail: '/crear_post' }));
  });

  const logout = document.createElement('img');
  logout.setAttribute('id', 'logout');
  logout.src = '../imgs/logout.png';
  divMenu.appendChild(logout);

  logout.addEventListener('click', () => {
    window.dispatchEvent(new CustomEvent('navigateTo', { detail: '/' }));
  });

  const divPosts = document.createElement('div');
  divPosts.setAttribute('id', 'div-posts');
  divContainer.appendChild(divPosts);

  const ulCard = document.createElement('ul');
  ulCard.setAttribute('id', 'ul-card');
  divPosts.appendChild(ulCard);

  paintRealTime((querySnapshot) => {
    ulCard.textContent = '';
    querySnapshot.forEach((doc) => {
      console.log(doc.id);
      // console.log(doc.data());
      const ul = divContainer.querySelector('#ul-card');
      const liCard = document.createElement('li');
      liCard.setAttribute('id', 'li-card');
      ul.appendChild(liCard);

      const divDescription = document.createElement('div');
      divDescription.setAttribute('id', 'div-description');
      liCard.appendChild(divDescription);

      const emailUser = document.createElement('p');
      emailUser.setAttribute('id', 'email-user');
      emailUser.innerHTML = doc.data().email;
      divDescription.appendChild(emailUser);

      const descriptionPosts = document.createElement('p');
      descriptionPosts.setAttribute('id', 'description-post');
      descriptionPosts.setAttribute('data-post-id', doc.id);
      descriptionPosts.innerHTML = doc.data().text;
      divDescription.appendChild(descriptionPosts);

      const editPosts = document.createElement('img');
      editPosts.setAttribute('id', 'edit-posts');
      editPosts.src = '../imgs/edit-text.png';
      divDescription.appendChild(editPosts);

      // editPosts.addEventListener('click', () => {
      //   const description = divContainer.querySelector('#description-post');
      //   const input = document.createElement('input');
      //   input.setAttribute('id', 'input-edit-post');
      //   input.value = description.textContent;
      //   description.parentNode.replaceChild(input, description);
      //   document.querySelector('#button-acept').style.display = 'block';
      // });

      const buttonAcept = document.createElement('button');
      buttonAcept.setAttribute('id', 'button-acept');
      buttonAcept.textContent = 'Aceptar';
      buttonAcept.style.display = 'none';
      divDescription.appendChild(buttonAcept);

      // buttonAcept.addEventListener('click', () => {
      //   const input = divContainer.querySelector('#input-edit-post');
      //   const p = document.createElement('p');
      //   p.setAttribute('id', 'description-post');
      //   p.innerHTML = doc.data().text;
      //   input.parentNode.replaceChild(p, input);
      //   document.querySelector('#button-acept').style.display = 'none';
      //   const postId = doc.id;
      //   editPost(postId, );
      // });

      const email = doc.data().email;
      const currentEmail = localStorage.getItem('emailLogeado');
      if (email === currentEmail) {
        divDescription.addEventListener('click', (event) => {
          if (event.target.id === 'edit-posts') {
            const description = divContainer.querySelector('#description-post');
            const input = document.createElement('input');
            input.setAttribute('id', 'input-edit-post');
            input.value = description.textContent;
            description.parentNode.replaceChild(input, description);
            document.querySelector('#button-acept').style.display = 'block';
          } else if (event.target.id === 'button-acept') {
            const input = divContainer.querySelector('#input-edit-post');
            const p = document.createElement('p');
            p.setAttribute('id', 'description-post');
            p.innerHTML = doc.data().text;
            input.parentNode.replaceChild(p, input);
            document.querySelector('#button-acept').style.display = 'none';
            const postId = doc.id;
            const inputValue = input.value;
            editPost(postId, inputValue);
          }
        });
      }

      const imgPost = document.createElement('img');
      imgPost.setAttribute('id', 'img-post-user');
      imgPost.src = doc.data().imagen;
      liCard.appendChild(imgPost);

      const divActions = document.createElement('div');
      divActions.setAttribute('id', 'div-actions');
      liCard.appendChild(divActions);

      const imgHeart = document.createElement('img');
      imgHeart.setAttribute('id', 'img-heart');
      imgHeart.src = '../imgs/heart.png';
      divActions.appendChild(imgHeart);

      const likes = doc.data().likes;

      const counter = document.createElement('p');
      counter.setAttribute('id', 'counter');
      counter.innerHTML = likes.length;
      divActions.appendChild(counter);

      imgHeart.addEventListener('click', () => {
        console.log('Funciono');
        const postId = doc.id;
        // const email = doc.data().email;
        console.log(postId);
        console.log(email);
        likePost(postId, email);
      });

      const imgDelete = document.createElement('img');
      imgDelete.setAttribute('id', 'img-delete');
      imgDelete.src = '../imgs/delete.png';
      divActions.appendChild(imgDelete);
      imgDelete.addEventListener('click', () => {
        if (email === currentEmail) {
          if (window.confirm('Este post irá a la caja de arena, seguro que deseas eliminarlo?')) {
            const postId = doc.id; // Obtener el ID del post que se eliminará
            deletePost(postId).then(() => {
              liCard.remove();
            }).catch((error) => {
              console.error('Error al eliminar el post:', error);
            });
          }
        } else {
          alert('No eres el propietario de este post, así que no puedes eliminarlo');
        }
      });
    });
  });
  return divContainer;
};
