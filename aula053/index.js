// ESSE EXERCICIO SÓ É MOSTRADO NO NAVEGADOR NA ABA CONSOLE...

// function retornaFuncao()  {
//   const nome = 'Paulo';
//   return function() {
//     return nome;
//   };
// }

// const funcao = retornaFuncao();
// console.dir(funcao);



function retornaFuncao(nome)  {
  return function() {
    return nome;
  };
}

const funcao = retornaFuncao('Paulo');
const funcao2 = retornaFuncao('João');

console.dir(funcao);
console.dir(funcao2);
