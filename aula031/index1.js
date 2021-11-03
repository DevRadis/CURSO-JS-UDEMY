const verdadeira = true;

function falaOi() {
  var nome = 'Luiz'
}

// console.log(nome);
// ** fazendo desse jeito da erro pois o nome está dentro do bloco, ele está protegido.
falaOi();

function falaOiOi() {
  
  if (verdadeira) {
    let nome = 'luiz';
    var sobrenome = 'Miranda';
  }
  console.log(sobrenome); // a função pode chamar uma variável de fora do escopo de bloco ou que esteja dentro de um bloco interno.
}

falaOiOi();