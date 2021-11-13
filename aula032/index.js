
// ... rest, spread para espalhar...
//                    0             1             2
//                0   1    2  | 0   1   2  | 0   1    2
const numeros =[ [10, 20, 30], [40, 50, 60], [70, 80, 90] ];
// --- console.log(numeros[1][2]) AQUI IREI PEGAR O NÚMERO 60

const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);

// --- const[,[,,seis]] = numeros;
// --- console.log(seis) // aqui terei o mesmo resultado do de cima..

// --------------------------------------------------

/*
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const [um, , tres, , cinco, , sete, , nove] = numeros;
console.log(um, tres, cinco, sete, nove);
*/

// -------------------------------------------------

/*

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres);
console.log(resto);
*/

// --------------------------------------------------

/*
let a = 'A';  // B
let b = 'B';  // C
let c = 'C';  // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);
*/