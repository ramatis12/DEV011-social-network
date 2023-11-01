/**
 * @jest-environment jsdom
 */
import { renderWall } from '../src/views/wall.js';
import * as myauth from '../src/functionAuth.js';

describe("Renderizado de muro, cerrar sesion, tiene un boton", () => {
  test("debería ser una función", () => {
    expect(typeof renderWall).toBe("function");
  });
  test("Tiene un botón", () => {
    const renderWallDOM = renderWall();
    const haveAButton = renderWallDOM.querySelector('#button-acept');
    expect(haveAButton).not.toBe(undefined);
  });
  test('Prueba si NavigateTo es llamado cuando se dispara el evento "navigateTo"', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(renderWall(navigateTo));
    const logout = DOM.querySelector('#logout');
    logout.click();
    expect(navigateTo).toHaveBeenCalled();
  });
  test('Prueba si NavigateTo envía a / cuando se dispara el evento "navigateTo"', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(renderWall(navigateTo));
    const logout = DOM.querySelector('#logout');
    logout.click();
    expect(navigateTo).toHaveBeenCalledWith('/');
  });
});

describe("NavigateTo nuevo post", () => {
  test('Prueba si NavigateTo es llamado cuando se dispara el evento "navigateTo nuevo post"', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(renderWall(navigateTo));
    const postOption = DOM.querySelector('#img-post');
    postOption.click();
    expect(navigateTo).toHaveBeenCalled();
  });
  test('Prueba si NavigateTo envía a /crear_post cuando se dispara el evento "navigateTo"', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(renderWall(navigateTo));
    const postOption = DOM.querySelector('#img-post');
    postOption.click();
    expect(navigateTo).toHaveBeenCalledWith('/crear_post');
  });
});

describe('Pruebas para paintRealTime', () => {
  beforeEach(() => {
    // Configura el elemento ulCard en el documento para cada prueba
    const ulCard = document.createElement('ul');
    ulCard.setAttribute('id', 'ul-card');
    document.body.appendChild(ulCard);

    const liCard = document.createElement('li');
    liCard.setAttribute('id', 'li-card');
    ulCard.appendChild(liCard);
    // console.log(liCard);
  });

  afterEach(() => {
    // Limpia el documento después de cada prueba
    document.body.innerHTML = '';
  });
it('debería crear elementos liCard en ulCard', () => {
    // Simula un querySnapshot con datos de prueba
    const querySnapshot = [
      { data: () => ({ email: 'usuario1', text: 'Mensaje 1' }) },
      { data: () => ({ email: 'usuario2', text: 'Mensaje 2' }) },
    ];

    // Llama a la función paintRealTime con el querySnapshot
   const prueba = myauth.paintRealTime(querySnapshot);
// console.log(prueba);
    // Verifica que ulCard contenga elementos liCard
    const ulCard = document.getElementById('#ul-card');

   
    const liCardElements = ulCard.querySelectorAll('#li-card');
    expect(liCardElements.length).toBe(querySnapshot.length);
  });
it('debería crear elementos con contenido correcto', () => {
    // Simula un querySnapshot con datos de prueba
    const querySnapshot = [
      { data: () => ({ email: 'usuario1', text: 'Mensaje 1' }) },
      { data: () => ({ email: 'usuario2', text: 'Mensaje 2' }) },
    ];

    // Llama a la función paintRealTime con el querySnapshot
    myauth.paintRealTime(querySnapshot);
// Verifica que los elementos creados tengan el contenido esperado
    const ulCard = document.getElementById('#ul-card');
    const emailUserElements = ulCard.querySelectorAll('#email-user');
    const descriptionPostsElements = ulCard.querySelectorAll('#description-post');
    
    expect(emailUserElements[0].textContent).toBe('usuario1');
    expect(descriptionPostsElements[0].textContent).toBe('Mensaje 1');
    
    expect(emailUserElements[1].textContent).toBe('usuario2');
    expect(descriptionPostsElements[1].textContent).toBe('Mensaje 2');
  });
});