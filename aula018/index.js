const pessoa1 = {
  nome: 'Paulo',
  sobrenome: 'Radis',
  idade: 31,

  fala() {
    console.log(`A minha idade atual é ${this.idade}.`)
  },

  incrementaIdade() {
    ++this.idade;
  }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
/* *************************************************************

function criaPessoa nome, sobrenome, idade) { 
  return {nome, sobrenome, idade};
}
    //nome: nome,
    //sobrenome: sobrenome,
    //idade: idade

const pessoa1 = criaPessoa('Paulo', 'Radis', 31)
const pessoa2 = criaPessoa('Samira', 'Santos', 35)
const pessoa3 = criaPessoa('Myra', 'Cesar', 35)
const pessoa4 = criaPessoa('Luiz', 'Otávio', 25)
const pessoa5 = criaPessoa('Nickolas', 'Cesar', 15)

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome)


// ARGUMENTO É O VALOR QUE É PASSADO PARA O PARAMETRO......

****************************************************** */

/* ***************************************************
const pessoa1 = {
  nome: 'Paulo',
  sobrenome: 'Radis',
  idade: 31
};

const pessoa2 = {
  nome: 'Samira',
  sobrenome: 'Santos',
  idade: 35
};


console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
*/
// ************************************************
/*
const nome01 = 'Paulo';
const sobrenome01 = 'Radis';
const idade01 = '31';

const nome02 = 'Samira';
const sobrenome02 = 'Santos';
const idade02 = '35';
*/

// ****************************************************
/*

const array = [1,2,3];
array.push(4); // aqui foi adicionado mais um elemento ao meu array
array[0] = 'Paulo'; // aqui foi alterado o elemento [0], nele continha o número 1..
console.log(array);

*/