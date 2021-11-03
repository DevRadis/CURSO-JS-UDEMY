const verdadeira = true;
// ** LET tem escopo de bloco { ... bloco} dentro de um bloco ela pode atribuir um novo valor.
let nome = 'Paulo'; // Criando
// * com o let não posso redefinir o nome por ex.. let nome = 'Luiz'; não posso redeclarar.
var nome2 = 'Paulo'; 
// * já no var eu posso.. var nome2 = 'Otávio';
console.log(nome, nome2) // ******
// *************** Escopo global.
if (verdadeira) {
  let nome = 'Otávio'; // Criando
  console.log(nome, nome2); // ******

if (verdadeira) {
  let nome = 'Outra coisa';
  console.log(nome, nome2); // *******
  } // escopo de bloco.
} // Bloco aninhado...

// nesse exemplo podemos ver que o let tem 3 nomes configurados...

// **********************************************************************

const verdadeiras = true;

let nome3 = 'Paulo'; // Criando
var nome4 = 'Paulo';  // Criando

if (verdadeira) {
  let nome3 = 'Otávio'; // Criando
  var nome4 = 'Rogério';  //redeclarando

if (verdadeira) {
  let nome3 = 'OUTRA COISA'; // criada
  var nome4 = 'Ronaldo'; // redeclarada
  console.log(nome3, nome4); // aqui ele mostra OUTRA COISA Ronaldo
  } // escopo de bloco.
}

console.log(nome3, nome4); 
// aqui ele mostra Paulo Ronaldo |
//                               v
// ** usado no escopo global, o VAR altera a ultima atualização, pois o var redeclara a variável, já o let só vai alterar se ela estiver no escopo de bloco com o console.log