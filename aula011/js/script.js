/*
alert('Com a nossa mensagem')
confirm('Deseja realmente apagar?')
prompt('Digite o seu nome: ')
*/

let n1 = prompt('Digite um número:')
let n2 = prompt('Digite outro número:')
n1 = Number(n1)
n2 = Number(n2)
let resultado = n1 + n2
alert(`O resultado da soma dos dois números é ${resultado}`)

let nome = prompt('Digite Seu nome aqui:')
let idade = prompt('Digite Sua idade aqui:')
alert(`Obrigado ${nome}, o resultado da sua soma é ${resultado}. Você tem ${idade} anos de idade.`);