/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY
* false 
0
"" '' ``
null / undefined
NaN
*/

console.log('Paulo Radis' && true && 'Maria');
console.log('Paulo Radis' && true && NaN);

console.log('Paulo Radis' && 'Maria');

// **********************************************
function falaOi() {
  return 'Oi';
}

let vaiExecutar = 'Joãozinho';

console.log(vaiExecutar && falaOi());

// ************************************************

console.log(0 || false || null || 'Paulo Radis' || true);

// *************************************************

const corUsuario = 'vermelho'; // se o usuário não selecionar cor aqui, ele retorna o 'preto'.
const corPadrao = corUsuario || 'preto';


console.log(corPadrao);

// ***************************************************

const a = 0;
const b = null;
const c = 'false'; // Aqui é uma string, por isso executa ela...
const d = false;
const e = NaN;

console.log(a || b || c || e);