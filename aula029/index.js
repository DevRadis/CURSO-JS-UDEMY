const data = new Date('1990-05-15 00:00:00');
let diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
case 0:
    diaSemanaTexto = 'Domingo';
  break;
case 1:
    diaSemanaTexto = 'Segunda';
  break;
case 2:
    diaSemanaTexto = 'Terça';
  break;
case 3:
    diaSemanaTexto = 'Quarta';
  break;
case 4:
    diaSemanaTexto = 'Quinta';
  break;
case 5:
    diaSemanaTexto = 'Sexta';
  break;
case 6:
    diaSemanaTexto = 'Sábado';
  break;
default:
  diaSemanaTexto = '';
  break; // Não tem necessidade do break aqui no final, pois é a ultima linha do código.
}

/* 
if (diaSemana === 0) {
  diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
  diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2) {
  diaSemanaTexto = 'Terça';
} else if (diaSemana === 3) {
  diaSemanaTexto = 'Quarta';
} else if (diaSemana === 4) {
  diaSemanaTexto = 'Quinta';
} else if (diaSemana === 5) {
  diaSemanaTexto = 'Sexta';
} else if (diaSemana === 6) {
  diaSemanaTexto = 'Sábado';
} else {
    diaSemanaTexto = '';
}
*/

console.log(diaSemana, diaSemanaTexto);