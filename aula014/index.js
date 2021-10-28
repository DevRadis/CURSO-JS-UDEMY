let num1 = 1500;
let num2 = 2.54874871841819;

// NESSE CASO ABAIXO O num1 SÓ IRÁ TRANSFORMAR EM STRING PARA ESSA OPERAÇÃO..
console.log(num1.toString() + num2); 
console.log(typeof num1); // NUMBER

/*************************************/
console.log(num1.toString(2)); // NESSE CASO ELE IRÁ SE TRANSFORMAR EM UM NÚMERO BINÁRIO.

/*************************************/

// NESSE CASO ABAIXO O num1 VIROU UMA STRING POR COMPLETO.
num1 = num1.toString(); 
console.log(typeof num1); // STRING

/*************************************/

console.log(num2.toFixed(2)); // let num2 = 2.54874871841819; PARA USAR APENAS DUAS CASAS DECIMAIS... 

// IEEE 754-2008
let num3 = 0.7; // number
let num4 = 0.1; // Number

num3 += num4;
num3 += num4;
num3 += num4; // INTEIRO COM ESSA SOMA...
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;

num3 = Number(num3.toFixed(2)); // PODENDO USAR O PARSEFLOAT //
console.log(num3)
console.log(Number.isInteger(num3))
