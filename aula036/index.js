//  For in -> lê os índices ou chaves do objeto
//

const pessoa = {
  nome: "Paulo",
  sobrenome: "Radis",
  idade: 31,
};

console.log(pessoa.nome);
console.log(pessoa["idade"]);

for (let chaves in pessoa) {
  console.log(chaves, pessoa[chaves]); // usando apenas o i apenas dentro do console.log(i)
}

// ----------------------------------------------------

const frutas = ["Pera", "Maçã", "Uva"];

for (let indice in frutas) {
  console.log(frutas[indice]);
}

// for (let i = 0; i <frutas.length; i++) {
//   console.log(frutas[i]);
// }
