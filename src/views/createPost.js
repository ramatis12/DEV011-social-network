export const createPost = () => {
  const divCreatePost = document.createElement('div');
  divCreatePost.setAttribute('id', 'div-create-post');

  const inputName = document.createElement('input');
  inputName.setAttribute('id', 'input-name');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('placeholder', 'Nombre del peludo');
  inputName.value = '';
  divCreatePost.appendChild(inputName);

  const textArea = document.createElement('textarea');
  textArea.setAttribute('id', 'text-area');
  textArea.setAttribute('placeholder', 'Describe en 500 palabras la personalidad de tu peludo:');
  textArea.setAttribute('maxlength', '500');
  textArea.value = '';
  divCreatePost.appendChild(textArea);

  const buttonSave = document.createElement('button');
  buttonSave.setAttribute('id', 'button-save');
  buttonSave.textContent = 'Guardar';
  divCreatePost.appendChild(buttonSave);

  return divCreatePost;
};
