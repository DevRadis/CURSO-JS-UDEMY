/*
Entre 0 - 11 - bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite

** if pode ser usado sozinho
*** Sempre que utilizo a palavra else, preciso de um if antes.
**** Eu posso ter vários else ifs na checagem.
***** Só posso ter um else na checagem.
****** Podemos usar condições sem else ifs utilizando apenas if e else
*/

const hora = 23;

if (hora <= 11) {
  console.log('Bom dia');
} else if (hora <= 17) {
  console.log('Boa tarde');
} else {
 console.log('Boa noite');
}

// ***********************************************************

const tenhoGrana = true;

if (tenhoGrana) {
  console.log('Vou sair de casa');
} else {
  console.log('Não irei sair de casa');
}