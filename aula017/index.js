const raizq = n => n ** 0.5; // ARROW FUNCTION => ESSE SIMBOLO SUBSTITUI O RETURN E O FUNCTION.. 

console.log(raizq(5))
console.log(raizq(12))
console.log(raizq(32))


const raiz = function (n) { //FUNCTION
  return n ** 0.5;
};

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))

/*function soma(x = 10, y = 1) { // no caso de colocar um valor em x e y aqui na function soma(x = 1, y = 1) se eu não colocar um valor na const resultado lá em baixo, ele somará 1+1
  const resultado = x + y;
  return resultado;
}

const resultado = soma(1, 2)
console.log(resultado)

// console.log(soma(2, 2));
// console.log(soma(3, 1));
// console.log(soma(5, 10));
 
function saudacao(nome) {
 // console.log(`Bom dia ${nome}!`); <<-- Nesse caso ela irá retornar essa mensagem na linha return
  return `Bom dia ${nome}!`;
}

const variavel = saudacao('Paulo');
console.log(variavel);
*/