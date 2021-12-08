// Factory function (função fábrica)

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome, 
    sobrenome,
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
      console.log(valor);
    },

    fala: function(assunto = 'falando sobre NADA') {
      return `${this.nome} está ${assunto}.`;
    }, 

    altura: altura,
    peso: peso,

    // Getter
    get imc() { // usando o get, ele finge ser uma string, no final não preciso colocar console.log(p1.imc()); imc()
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

// const p1 = criaPessoa('Paulo', 'Radis', 1.71, 108);
// console.log(p1.imc);
// const p2 = criaPessoa('Maria', 'Rosario', 1.4, 52);
// console.log(p2.imc);
// console.log(p2.fala('falando sobre JS'));

const p1 = criaPessoa('João', 'da Silva Oliveira', 1.71, 108);
p1.nomeCompleto = 'João da Silva Oliveira';

console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());

