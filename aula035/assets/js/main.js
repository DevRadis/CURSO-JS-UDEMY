const elementos = [
  {tag: 'p', texto: 'Frase 1'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'footer', texto: 'Frase 3'},
  {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  tagCriada.innerText = texto;
  div.appendChild(tagCriada);
}

container.appendChild(div);


/*
const h1 = document.querySelector('.container');


const elementos = [
  {tag: 'p', texto: 'Frase 1'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'footer', texto: 'Frase 3'},
  {tag: 'section', texto: 'Frase 4'},
];

function criaP() {
  const p = document.createElement('p');
  return p;
}

function criaDiv() {
  const div = document.createElement('div');
  return div;
}

function criaFooter() {
  const footer = document.createElement('footer');
  return footer;
}

function criaSection() {
  const section = document.createElement('section');
  return section;
}

const p = criaP();
const div = criaDiv();
const footer = criaFooter();
const section = criaSection();

p.innerHTML = p
p.appendChild(p);
*/