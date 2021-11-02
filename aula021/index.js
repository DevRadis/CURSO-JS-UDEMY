/*
Operadores de comparação...

> maior que
>=  maior que ou igual a
< menor que
<=  menor que ou igual a
==  igualdade (valor) ******************
=== igualdade estrita (valor e tipo)
!= diferente (valor) ******************
!== diferente estrito (valor e tipo)

*/
const comp = 10 > 5;
console.log(comp); // true

const comp1 = 10 >= 5;
console.log(comp1); // true

const comp2 = 10 >= 11;
console.log(comp2); // false

const comp3 = 10 <= 11;
console.log(comp3); // true

const comp4 = 10 <= 5;
console.log(comp4); // false

const comp5 = 10 == 5;
console.log(comp5); // false

const comp6 = 10 == 10;
console.log(comp6); // true

const comp61 = 10 == '10';
console.log(comp61); // true, a igualdade não diferencia o string de Number...

const comp7 = 10 === 5;
console.log(comp7); // false

const comp8 = 10 === 10;
console.log(comp8); // true

const comp9 = 10 === '10';
console.log(comp9); // false, string diferente de Number..

const comp10 = 10 != '10';
console.log(comp10); // false, nesse caso a string tem o mesmo número dentro, então o js entende que é igual.

const comp11 = 10 != 9;
console.log(comp11); // true, ele é diferente.

const comp12 = 10 !== 9;
console.log(comp12); //true, ele é diferente.

const comp13 = 10 !== 10;
console.log(comp13); // false, ele não é diferente...

const comp14 = 10 !== '10';
console.log(comp14); // true, ele é diferente estrito de 10, sendo uma number e o outro string..