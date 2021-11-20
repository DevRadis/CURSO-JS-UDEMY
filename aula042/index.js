// Escreva uma função chamada ePaisagem que
// recebe dois argumentos, largura e altura 
// de uma imagem (numeber).
// Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (largura, altura) => largura > altura; // ? true : false;


// function ePaisagem(largura, altura) {
//   return largura >= altura; // ? true : false; ele já irá retornar true ou false
// }


// function ePaisagem(largura, altura) {
//   if (largura > altura)     return true;
//   return false;
// }

console.log(ePaisagem(600, 315));