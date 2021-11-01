/*
PRIMITIVOS (IMUTÁVEIS) - STRINGS, NUMBER, BOOLEAN, UNDEFINED, NULL (BIGINT, SYMBOL) **VALORES COPIADOS**

REFERÊNCIA (MUTÁVEL) - ARRAY, OBJECT, FUNCTION. **VALORES PASSADOS POR REFERÊNCIA**
                                
                   VALORES IMUTÁVEIS  */

let a = 'A';
let b = a;

console.log(a, b);

a = 'Outra coisa';

console.log(a, b); // nesse caso o valor de a mudou, más a cópia do b não mudou, pois o valor é imutável...

/* ********************************************** 
                  VALORES MUTÁVEIS  */
let c = [1, 2, 3];
let d = c;
console.log(c, d);

c.push(4);
console.log(c, d); // nesse caso o valor foi mudado...

d.pop();
console.log(c, d); // mesmo mudando o valor de D, o valor de C também muda, pois os valores são idênticos...


/****************************************************/

let x = [10, 20, 30];
let y = [...x]; // ***** AQUI FOI CRIADO UMA CÓPIA DO X ****
let z = y;

console.log(x, y);

x.push(40);

console.log(x, y); // nesse caso o valor de y não puchou a implementação do 40 do x...

y.pop();
console.log(x, y, z); // nesse caso o valor de Y foi alterado, mudando apenas o valor de Y e sua REFERÊNCIA Z...

/********************************************************/

const pessoa = {
  nome: 'Paulo',
  sobrenome: 'Radis'
};
const pessoa1 = {...pessoa};
console.log(pessoa, pessoa1);

pessoa.nome = 'João'; // nesse caso houve alteração no nome da pessoa1, pois o valor é mutável... MAS SE EU NÃO QUISER MUDAR O VALOR DE PESSOA1 E SÓ DE PESSOA COLOCAR {...pessoa} ***
console.log(pessoa, pessoa1); // nesse caso só mudou pessoa, e o pessoa1 continua como foi copiado logo no início...

