/*
= NÃO PODEMOS CRIAR CONSTANTES COM PALAVRAS RESERVADAS, EX CONST CONST = 0
= CONSTANTES PRECISAM TER NOMES SIGNIFICATIVOS
= NÃO PODE COMEÇAR O NOME DE UMA CONSTANTE COM UM NÚMERO
= NÃO PODEM CONTER ESPAÇOS OU TRAÇOS
= UTILIZAMOS CAMELcASE
= CASE-SENSITIVE
= NÃO PODE MODIFICAR O VALOR DE UMA CONSTANTES
= NÃO UTILIZE VAR, UTILIZE CONST.
*/

const nome = 'João'
console.log(nome)

const primeiroNumero = '5' // usando o numero como string e outro como Number, a soma será do número que vem primeiro com o número a seguir ao lado.. ex linha 25
const segundoNumero = 10
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2
let resultadoTriplicado = resultado * 3
resultadoTriplicado = resultadoTriplicado + 5
console.log(resultadoTriplicado)

console.log(typeof primeiroNumero)

console.log(segundoNumero + primeiroNumero)