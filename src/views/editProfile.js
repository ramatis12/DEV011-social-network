export const renderEditProfile = () => {

const divEditProfile = document.createElement('div');
divEditProfile.setAttribute('id', 'div-Edit-Profile');

const title = document.createElement('p');
title.setAttribute('id', 'title');
title.innerHTML = 'Datos del amigo peludo';
divEditProfile.appendChild(title);

const imgProfile = document.createElement('img');
imgProfile.setAttribute('id', 'img-profile');
imgProfile.src = '../imgs/userPic.png';
divEditProfile.appendChild(imgProfile);

const inputName = document.createElement('input');
inputName.setAttribute('id', 'input-name');
inputName.setAttribute('type', 'text');
inputName.setAttribute('placeholder', 'Nombre del peludo');
inputName.value = '';
divEditProfile.appendChild(inputName);

const inputAge = document.createElement('input');
inputAge.setAttribute('id', 'input-age');
inputAge.setAttribute('type', 'text');
inputAge.setAttribute('placeholder', 'Edad felina');
inputAge.value = '';
divEditProfile.appendChild(inputAge);

const textArea = document.createElement('textarea');
textArea.setAttribute('id', 'text-area');
textArea.setAttribute('placeholder', 'Describe en 500 palabras la personalidad de tu peludo:');
textArea.setAttribute('maxlength', '500');
textArea.value = '';
divEditProfile.appendChild(textArea);

const buttonSave = document.createElement('button');
buttonSave.setAttribute('id', 'button-save');
buttonSave.textContent = 'Guardar';
buttonSave.appendChild(buttonSave);

const linkCalendar = document.createElement('p');
linkCalendar.setAttribute('id', 'link-calendar');
linkCalendar.innerHTML = 'Cuéntame tu historia...';
divEditProfile.appendChild(linkCalendar);

return divEditProfile;
}