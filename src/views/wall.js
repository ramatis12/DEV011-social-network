import { paintRealTime, deletePost, likePost } from '../functionAuth.js';

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
      descriptionPosts.innerHTML = doc.data().text;
      divDescription.appendChild(descriptionPosts);

      const editPosts = document.createElement('img');
      editPosts.setAttribute('id', 'edit-posts');
      editPosts.src = '../imgs/edit-text.png';
      divDescription.appendChild(editPosts);

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
        const email = doc.data().email;
        console.log(postId);
        console.log(email);
        likePost(postId, email);
      });

      const imgDelete = document.createElement('img');
      imgDelete.setAttribute('id', 'img-delete');
      imgDelete.src = '../imgs/delete.png';
      divActions.appendChild(imgDelete);
      imgDelete.addEventListener('click', () => {
        const postId = doc.id; // Obtener el ID del post que se eliminará
        deletePost(postId).then(() => {
          liCard.remove();
        }).catch((error) => {
          console.error('Error al eliminar el post:', error);
        });
      });
    });
  });

  return divContainer;
};
