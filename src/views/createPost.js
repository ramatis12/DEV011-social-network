export const createPost = () => {
  const divCreatePost = document.createElement('div');
  divCreatePost.setAttribute('id', 'div-create-post');

  const inputName = document.createElement('input');
  inputName.setAttribute('id', 'input-name');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('placeholder', 'URL de tu foto');
  inputName.value = '';
  divCreatePost.appendChild(inputName);

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

  return divCreatePost;
};
