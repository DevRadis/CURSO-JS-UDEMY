let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}

console.log('Segue a vida...')

// ------------------------------------------------------------

const nome = 'Luiz';

let ii = 0;

while (ii < nome.length) {
  console.log(nome[ii]);
  ii++
}

console.log('Segue a vida...')

// ------------------------------------------------------------

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r); // para fazer o random inteiro.
}

const min = 1;
const max = 50;
let rand = random(min, max);
// console.log(rand);

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log('##################################')
// ------------------------------------------------------------

do {
  rand = random(min, max);
  console.log(rand)
} while (rand !== 10);
