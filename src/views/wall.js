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

  const logout = document.createElement('img');
  logout.setAttribute('id', 'logout');
  logout.src = '../imgs/logout.png';
  divMenu.appendChild(logout);

  const divPosts = document.createElement('div');
  divPosts.setAttribute('id', 'div-posts');
  divContainer.appendChild(divPosts);

  const ulCard = document.createElement('ul');
  ulCard.setAttribute('id', 'ul-card');
  divPosts.appendChild(ulCard);

  const liCard = document.createElement('li');
  liCard.setAttribute('id', 'li-card');
  ulCard.appendChild(liCard);

  // const liCard1 = document.createElement('li');
  // liCard1.setAttribute('id', 'li-card');
  // ulCard.appendChild(liCard1);

  // const liCard2 = document.createElement('li');
  // liCard2.setAttribute('id', 'li-card');
  // ulCard.appendChild(liCard2);

  // const liCard3 = document.createElement('li');
  // liCard3.setAttribute('id', 'li-card');
  // ulCard.appendChild(liCard3);

  const divDescription = document.createElement('div');
  divDescription.setAttribute('id', 'div-description');
  liCard.appendChild(divDescription);

  const emailUser = document.createElement('p');
  emailUser.setAttribute('id', 'email-user');
  emailUser.innerHTML = 'Datos del amigo peludo';
  divDescription.appendChild(emailUser);

  const descriptionPosts = document.createElement('p');
  descriptionPosts.setAttribute('id', 'description-post');
  descriptionPosts.innerHTML = 'Lorem ipsum dolor sit amet, consectetu adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.';
  divDescription.appendChild(descriptionPosts);

  const editPosts = document.createElement('img');
  editPosts.setAttribute('id', 'edit-posts');
  editPosts.src = '../imgs/edit-text.png';
  divDescription.appendChild(editPosts);

  const imgPost = document.createElement('img');
  imgPost.setAttribute('id', 'img-post-user');
  imgPost.src = 'https://www.elmueble.com/medio/2023/05/22/gatitos_1f740045_230522123911_1000x667.jpg';
  liCard.appendChild(imgPost);

  const divActions = document.createElement('div');
  divActions.setAttribute('id', 'div-actions');
  liCard.appendChild(divActions);

  const imgHeart = document.createElement('img');
  imgHeart.setAttribute('id', 'img-heart');
  imgHeart.src = '../imgs/heart.png';
  divActions.appendChild(imgHeart);

  const counter = document.createElement('p');
  counter.setAttribute('id', 'counter');
  counter.innerHTML = '0';
  divActions.appendChild(counter);

  const imgDelete = document.createElement('img');
  imgDelete.setAttribute('id', 'img-delete');
  imgDelete.src = '../imgs/delete.png';
  divActions.appendChild(imgDelete);

  return divContainer;
};
