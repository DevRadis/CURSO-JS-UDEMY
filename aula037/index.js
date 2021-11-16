const nome = ['Paulo', 'Radis', 'Junior'];

   //FOR CLÁSSICO - Geralmente com iteráveis (array ou strings)
for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}

console.log('##---1---##');

//FOR IN - retorna o índice ou chave (strings, array ou objetos)
for (let i in nome) {
  console.log(nome[i]);
}

console.log('##---2---##');

//FOR OF - Retorna o valor em si (iteráveis, arrays ou strings)
for (let valor of nome) {
  console.log(valor);
}

console.log('##---3---##');

              //FOREACH
nome.forEach(function(valor, indice, array) {
  console.log(valor, indice, array);
});