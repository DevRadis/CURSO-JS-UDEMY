/*
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia); 
// -------------- 01/01/1970 Timestamp unix ou época unix
console.log(data.toString());
*/

// const data = new Date(1990, 4, 15, 17, 15, 27, 500);
// console.log(data.toString());

/*
const data = new Date('1990-05-15 17:15:53.100'); 1636716626753
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero (0)
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('MS', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now()); // me da os MS desde o marco zero 01/01/1970
*/

function zeroAEsquerda (num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
const dia = zeroAEsquerda(data.getDate());
const mes = zeroAEsquerda(data.getMonth() + 1); // Mês começa do zero (0)
const ano = zeroAEsquerda(data.getFullYear());
const hora = zeroAEsquerda(data.getHours());
const min = zeroAEsquerda(data.getMinutes());
const seg = zeroAEsquerda(data.getSeconds());
return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);