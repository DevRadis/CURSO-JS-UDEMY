const elementos = [
  {tag: 'p', texto: 'Paulo será um ótimo programador.'},
  {tag: 'div', texto: 'Ele tem apenas 31 anos e já está com muita moral.'},
  {tag: 'section', texto: 'Começou a programar tem pouco tempo e já está aprendendo JavaScript.'},
  {tag: 'footer', texto: 'Ele estuda e trabalha muito, tem o apoio total de sua esposa.'}
];

const container = document.querySelector('.container'); // selecionando o container do HTML.
const div = document.createElement('div'); // aqui estamos criando uma DIV que será usada depois.


for (let i = 0; i < elementos.length; i++) { // aqui estou desestruturando o objeto que está dentro do array.
  let {tag, texto} = elementos[i]; // estou colocando a tag e o texto dentro do elemento I.
  let criaTag = document.createElement(tag); // Estou criando o elemento TAG dentro da variavel criaTag.
  criaTag.innerText = texto; // aqui estou informando que a criaTag receberá o valor de texto.
  div.appendChild(criaTag); // aqui estou criando um filho (DIV) que terá o criaTag dentro dela.
}

container.appendChild(div); // aqui estou finalizando e colocando a div dentro do meu HTML dentro da class container...