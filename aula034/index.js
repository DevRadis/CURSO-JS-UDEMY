// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// i - index
// criando variavel; no final não põe o ;
for (let i = 0; i <= 10; i += 5) { // i++ recebe +1 i += 5 soma de 5 em 5
  console.log(`Linha ${i}`);
}

for (let i = 500; i >= 400; i -= 5) { // i-- recebe -1 i -= 5 subtrai de 5 em 5
  console.log(`Linha ${i}`);
}

for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? 'par' : 'ímpar';
  console.log(i, par);
}
//                0       1       2
const frutas = ['Maçã', 'Pêra', 'Uva', 'kiwi', 'Banana', 'Morango'];

for (let i = 0; i < frutas.length; i++) {
  // console.log(i) aqui ele chamará pelo índice 0 1 2
  console.log(`Índice ${i}`, frutas[i]) // aqui ele irá chamar pelo nome do e pelo índice do array
}