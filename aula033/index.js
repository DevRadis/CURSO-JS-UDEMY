const pessoa = {
nome: 'Paulo', // SE COMENTAR ESSA LINHA o nome não terá atribuilção...
sobrenome: 'Radis',
idade: '31',
endereco: {
  rua: 'Rua Adão', // SE COMENTAR ESSA LINHA A RUA VIRA 12345
  numero: '80'
  }
};
// Atribuição NORMAL
// --- const nome = pessoa.nome;

// Atribuição via desestruturação (Objetos)
// const {nome = '', sobrenome, idade } = pessoa; SE O NOME LÁ EM CIMA TIVER COMENTADO OU NÃO EXISTIR ELE NÃO DARÁ UNDEFINED COM O NOME ASSIM.
const { sobrenome, idade } = pessoa; 
console.log(sobrenome, idade);

const {endereco: {rua: r = 12345, numero}, endereco} = pessoa;
console.log(r, numero, endereco);

const {nome, ...resto} = pessoa;
console.log(nome, resto);