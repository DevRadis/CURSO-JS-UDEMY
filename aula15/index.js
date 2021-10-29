// *** let num1 = 9.54578;
// *** let num2 = Math.round(num1); // round arredonda para o mais proximo...
// ceil arredonda pra cima...
// floor arredonda pra baixo...
// console.log(num2);

//console.log(Math.max(1,2,3,4,5,6,7,8,9,1500,-50,-78,45,78,9797)); // maior número da sequencia.
//console.log(Math.min(1,2,3,4,5,6,7,8,9,1500,-50,-78,45,78,9797)); // menor número da sequencia.
//console.log(Math.random()); é usado para criar um número aleatório entre 0 e 1...

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // nesse caso ele irá fazer um número aleatório entre 10 e 5, sendo arrendondado para o número mais próximo.
console.log(aleatorio);

console.log(Math.PI); // valor de PI
console.log(Math.pow(2, 10)); // potenciação usando math..
console.log(2 ** 10); // potenciação normal.

let num3 = 49;
console.log(num3 ** (1/2)); // raiz quadrada..

console.log(num3 ** 0.5); // raiz quadrada feito mais fácil..

console.log(100 / 0); // pode ser infinity e é um valor true..