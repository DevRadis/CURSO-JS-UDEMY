// Função construtora -> objetos
// Função fabrica -> Objetos
// Contrutora -> Pessoa (new)

function Pessoa(nome, sobrenome)  {
  // Atributos ou métodos privados
  const ID = 123456;

  const metodoInterno = function() {

  };

  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo  = () => {
    console.log(this.nome + ' ' + this.sobrenome + ': Sou um método');
  };
}

const p1 = new Pessoa('Paulo', 'Radis');
const p2 = new Pessoa('Maria', 'Junior');
p1.metodo();