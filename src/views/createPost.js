export const createPost = () => {
  const enlaceCSS = document.createElement('link');

// Establece los atributos del enlace
enlaceCSS.rel = 'stylesheet';
enlaceCSS.type = 'text/css';
enlaceCSS.href = 'ruta/a/estilos.css'; // Reemplaza 'ruta/a/estilos.css' con la ubicación de tu archivo CSS externo

// Agrega el elemento <link> al encabezado (head) del documento
document.head.appendChild(enlaceCSS);

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
