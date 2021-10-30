const alunos = ['Luiz', 'Maria', 'joão'];
//                 0       1        2

console.log(typeof alunos); // ** alunos nesse caso é considerado um objeto, mas na linha abaixo sabemos que é um array...
console.log(alunos instanceof Array); // ** para descobrir se é um array ou um objeto

alunos.push('Luiza');
alunos.push('Eduardo');

console.log(alunos.slice(0, 3)); // ** aqui iremos mostrar até o elemento 2, utilizando até o 3, pois o 3 não aparecerá...
console.log(alunos.slice(0, -2)); // ** aqui no caso ele elimina os dois ultimos elementos do array...

// ** AQUI O 'ALUNOSS' FOI MUDADO PARA UM NUMBER, ASSIM DEIXANDO DE SER UM ARRAY...
let alunoss = ['Luiz', 'Maria', 'joão'];
alunoss = 123
console.log(typeof alunoss);
console.log(alunoss instanceof Array);

// console.log(alunos[50]);
    // ** Podemos acessar elementos que não foram adicionados, não dará erro, apenas estará undefined

// delete alunos[1];
// console.log(alunos);
// ** Posso deletar a MARIA elemento (1) e elá ficará como undefined...

// const removido = alunos.shift();
// console.log(removido);
// console.log(alunos);
// ** Remove o primeiro elemento e adiciona em uma constante..

// const removido = alunos.pop(); 
// ** Removendo o último elemento e adiciona em uma constante..

// alunos.unshift('Luiza'); 
// alunos.unshift('Fábio');
// ** adiciona no início

// alunos.push('Fábio');
// alunos.push('Otávio'); 
// **posso usar o .push para adicionar elementos ao meu array

// alunos[alunos.length] = 'Luiza'; 
// alunos[alunos.length] = 'Fábio';
// alunos[alunos.length] = 'Luana';
// **adiciona no fim do array um elemento

// alunos[0] = 'Eduardo';
// alunos[3] = 'Luiza'; // ** adicionando
// ** altera o elemento da array

// console.log(alunos);
// console.log(alunos[1]);
// console.log(alunos[2]);
// ** exibe os elementos 