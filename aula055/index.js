// IIFE -> Immediately invoked function expression

(function(idade, peso, altura) {
  const sobrenome = 'Radis';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Paulo'));
  }

  falaNome();
  console.log(idade, peso, altura);
})(31, 108, 1.71);


//--------------------------------------------------------------------------

// (function() { //AQUI DENTRO ELE NÃO AFETA O ESCOPO GLOBAL, TODAS AS FUNÇÕES QUE FOREM CRIADAS AQUI FICARÃO APENAS AQUI DENTRO.
//   const nome = 'Paulo';
//   console.log(nome);
// })();

// const nome = 'Qualquer Coisa';

// --------------------------------------------------------------------------

// function qualquerCoisa() {
//   console.log(112158818);
// }
// qualquerCoisa();