 // Declaração de funcão (Function Hoisting)
falaOi(); // se você chamar a funcão antes de declarar, ela funciona..
function falaOi() {
   console.log('Oie');
}
 
falaOi(); // podemos também chamar depois..

// First-class objects (Objetos de primeira classe)

// ------------------------------------------------------------

// uma constante recebendo uma função.

const souUmDado = function() {
  console.log('Sou um dado.');
};
souUmDado();

// ------------------------------------------------------------

function executaFuncao(funcao) {
  console.log('Vou executar sua função abaixo:');
  funcao();
}
executaFuncao(souUmDado);

//------------------------------------------------------------

// Arrow function

const funcaoArrow = () => {
  console.log('Sou uma arrow function');

};

funcaoArrow();

// ------------------------------------------------------------

// Dentro de um objeto

const obj = {
  falar: function() { // posso criar a function sem o nome e sem : EX: falar() {}
    console.log('estou falando...')
  }
};

obj.falar();