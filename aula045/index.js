function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instancia de Date.');
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false // mostrar a hora sem timezone.
  });
} 
try {
const data = new Date('01-01-1970 12:58:12')
const hora = retornaHora(data); // aqui faço o erro acontecer, mudando data para numero ou se deixar sem nada, mostrará a hora atual.
console.log(hora);
} catch(e) {
  // console.log(e); *** AQUI EXIBE O ERRO..
  // Tratar erro
} finally {
  console.log('tenha um bom dia');
}
// try { // É executada quando não há erros.
//   // console.log(a);
//   console.log('Abri o arquivo');
//   console.log('Manipulei o arquivo e gerou erro');
//   console.log('Fechei o arquivo');

//   try {
//     console.log(b);
//   } catch(e){
//     console.log('Deu erro');
//   } finally {
//     console.log('Também sou FINALLY');
//   }

// } catch (e) { // É executada quando há erros.
//   console.log('Tratando o erro');
// } finally { // Sempre
//   console.log('FINALLY: Eu sempre sou executado');
// }