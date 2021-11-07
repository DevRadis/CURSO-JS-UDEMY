// argumentos que sustenta todos os argumentos enviados...
function funcao(a,b,c /* não preciso criar os argumentos aqui */) {
  let total = 0;
  for (argumento of arguments) {
    total += argumento;
  }
  console.log(total, a, b, c /* Aqui foi colocado a b c para mostrar os argumentos postos em funcao lá em cima. */);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// não funciona em arrow function...

// ------------------------------------------------------------------

function funcao(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3); // se eu exibir até o 3 aqui ele dá undefined nos demais argumentos...

// ------------------------------------------------------------------

function funcao(a, b = 2, c = 4) {
  console.log(a + b + c);
}
funcao(2, undefined, 10); // usando undefined no meio do argumento ele utilizará o valor atribuido ao B.. neste caso

// -------------------------------------------------------------

function funcao({ nome, sobrenome, idade}) {
  console.log(nome, sobrenome, idade);
}
// posso também criar o obj aqui que ele irá funcionar da mesma maneira...
// let obj = {nome: 'Paulo', sobrenome: 'Radis', idade: 31};
funcao({nome: 'Paulo', sobrenome: 'Radis', idade: 31});

//-------------------------------------------------------------

function funcaoo ([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}

funcaoo(['Paulo Augusto', 'Radis Junior', 31]);