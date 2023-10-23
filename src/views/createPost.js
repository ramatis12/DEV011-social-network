import { addPost, paintRealTime, querySnapshot } from "../functionAuth.js";

export const createPost = () => {
  const divCreatePost = document.createElement('div');
  divCreatePost.setAttribute('id', 'div-create-post');

  const urlImg = document.createElement('input');
  urlImg.setAttribute('id', 'url-img');
  urlImg.setAttribute('type', 'text');
  urlImg.setAttribute('placeholder', 'URL de tu foto');
  urlImg.value = '';
  divCreatePost.appendChild(urlImg);

  const textArea = document.createElement('textarea');
  textArea.setAttribute('id', 'text-area');
  textArea.setAttribute('placeholder', 'Escribe en 140 palabras un encabezado para tu foto:');
  textArea.setAttribute('maxlength', '140');
  textArea.value = '';
  divCreatePost.appendChild(textArea);

  const buttonSave = document.createElement('button');
  buttonSave.setAttribute('id', 'button-save');
  buttonSave.textContent = 'Guardar';
  divCreatePost.appendChild(buttonSave);

  buttonSave.addEventListener('click', () => {
    const text = divCreatePost.querySelector( '#text-area');
    const imagen = divCreatePost.querySelector( '#url-img');
    addPost (text.value , imagen.value);
    text.value = '';
    imagen.value = '';
    window.dispatchEvent(new CustomEvent('navigateTo', { detail: '/muro' }));
    
  });


  return divCreatePost;
};
