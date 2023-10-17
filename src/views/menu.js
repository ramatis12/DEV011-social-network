export const renderMenu = () => {
const divMenu = document.createElement('div');
divMenu.setAttribute('id', 'div-menu');

const userOption = document.createElement('img');
userOption.setAttribute('id','img-user');
userOption.src = '../imgs/userPic.png';
divMenu.appendChild(userOption);

const postOption = document.createElement('img');
postOption.setAttribute('id', 'img-post');
postOption.src = '../imgs/upload pic.png';
divMenu.appendChild(postOption);

const homeOption = document.createElement('img');
homeOption.setAttribute('id', 'img-home');
homeOption.src = '../imgs/home.png';
divMenu.appendChild(homeOption);

const logout =document.createElement('img');
logout.setAttribute('id', 'logout');
logout.src = '../imgs/logout.png';
divMenu.appendChild(logout);

return divMenu;
}

