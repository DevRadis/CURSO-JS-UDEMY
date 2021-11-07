/*function conta(operador, acumulador, ...numeros) { // ...numeros seria usado o rest operator
  for(let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }
  console.log(acumulador)
}

// a partir do 0, o rest operator ...numeros faz como 
conta('+', 1, 20, 30, 40, 50);
*/
//-----------------------------------------------------------

const conta = function(operador, acumulador, ...numeros) { 
  // podemos usar *** const conta = (...args)
  // ..numeros seria usado o rest operator... 
  for(let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }
  console.log(acumulador)
};

// a partir do 0, o rest operator ...numeros faz como 
conta('+', 1, 20, 30, 40, 50);