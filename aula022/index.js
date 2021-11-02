/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true.
|| -> OR -> OU ->
! -> NOT -> NÃO ->
*/

const usuario = 'Paulo';
const senha = '123456';
//                            true                  true
const vaiLogar = usuario === 'Paulo' && senha === '123456';
console.log(vaiLogar);

// *******

console.log(true && true && true && true); //true

const expressaoAnd = true && true && true && true;
console.log(expressaoAnd); // true

//********************************************** */
const usuario1 = 'Paulo';
const senha1 = '123456';
//                             true                 false
const vaiLogar1 = usuario1 === 'Paulo' && senha1 === '12345';
console.log(vaiLogar1);

// *****

console.log(true && true && false && true); //false

const expressaoAnd1 = true && true && false && true;
console.log(expressaoAnd1); // false

/***************************************************/
console.log(true || true || true || true); //true

const expressaoOr = true || true || true || true;
console.log(expressaoOr); //true

/***************************************************/
console.log(true || false); //true

const expressaoOr1 = true || false;
console.log(expressaoOr1) // true, não importa se tem uma resposta false na minha pergunta, se uma delas der true, minha resposta será true.. no caso do exemplo, se tiver sol e eu não tiver dinheiro, irei sair da mesma forma..

/*****************************************************/

console.log(false || false); // false

const expressaoOr2 = false || false;
console.log(expressaoOr2) // false, no caso das duas serem falsas, se não tiver sol e não tiver dinheiro, ficarei em casa, então a expressão será false, pois eu não irei sair de casa.

/*******************************************************/

console.log(!false); // true

console.log(!true); // false

console.log(!!true); // true

console.log(!!false); // false