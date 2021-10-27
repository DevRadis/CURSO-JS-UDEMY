/*
Precedencia
()
**
* / %
+ -

Aritméticos
+ Adição / concatenação
- Subtração
/ Divisão
* Multiplicação
** Potenciação
% Resto da divisão

*/

const num1 = 5
const num2 = 2
const num3 = 10
console.log(num1 + num2 * num3)

/*
let contador = 10
contador++
console.log(contador)

Incremento = ++ ante é pré-incremento e após é pós-incremento
decremento = --
*/

let contador = 0
// OPERADORES DE ATRIBUIÇÃO
contador += 2
console.log(contador)
contador += 2
console.log(contador)
contador += 2
console.log(contador)


// NaN - Not a Number

const n1 = 10
const n2 = Number('5.5') //parseInt para números inteiros. parseFloat para números decimais.
console.log(n1 + n2)