// ECMAScript 2015 (ES6)
var nome = 'Paulo'
var nome = 'Augusto'

console.log(nome)

// nome = 'Paulo' NÃO CRIE VARIÁVEIS SEM LET OU VAR.

// Usando let o nome só pode ser redefinido se não ouver o let no início da variável. EX:

let nomeMasculino = 'Paulo'
nomeMasculino = 'Radis' // aqui foi redefinido a variável let
console.log(nomeMasculino)

// EXPLICAÇÃO EM UM COMENTÁRIO DO PROFESSOR

const aMinusculo = 'a';
const aMaiusculo = 'A';
 
console.log(
  'Letra',
  aMinusculo,
  'Hexadecimal',
  aMinusculo.charCodeAt(0).toString(16),
  'Binário',
  aMinusculo.charCodeAt(0).toString(2),
); // Letra a Hexadecimal 61 Binário 1100001
 
console.log(
  'Letra',
  aMaiusculo,
  'Hexadecimal',
  aMaiusculo.charCodeAt(0).toString(16),
  'Binário',
  aMaiusculo.charCodeAt(0).toString(2),
); // Letra A Hexadecimal 41 Binário 1000001
