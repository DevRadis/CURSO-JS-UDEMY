const nome = 'Paulo Augusto'
const sobrenome = 'Radis'
const idade = 31
const peso = 105
const alturaEmM = 1.71
let indiceMassaCorporal // peso / (altura * altura)
let anoNascimento

indiceMassaCorporal = peso / (alturaEmM * alturaEmM)
anoNascimento = 2021 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg, tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}.`)
console.log(`${nome} nasceu em ${anoNascimento}.`)