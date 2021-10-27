let nome = 'João';
// Não podemos criar variáveis com palavras reservadas ex: let let = 'João'
// As variavéis precisam ter nomes significativos
console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

// Não pode começar o nome de uma variável com um número.
// let 1nome; ERRADO!! <<<<<<

// Não podem conter espaços ou traços
// let nome-Cliente; ou let nome Cliente;

// Utilizamos camelCase
let nomeCompletoDoCliente = 'Paulo Augusto';
console.log(nomeCompletoDoCliente);

// Case-sensitive
let nomeCliente = 'Paulo';
let nomecliente = 'João';

console.log(nomeCliente, nomecliente);

// Não podemos redeclarar variáveis com let

// NÃO UTILIZE VAR, UTILIZE LET