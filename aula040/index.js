const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let numero of numeros) {

  if (numero === 20) {
    console.log('Pulei o número 20');
    continue;
  }

  if (numero === 70) {
    console.log('70 encontrado, saindo...')
    break;
  }

  // if (numero === 70) {
  //   continue;
  // }
  console.log(numero);
}