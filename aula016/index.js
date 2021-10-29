const numero = prompt('Digite um número')


document.body.innerHTML += `<h1>Seu número é: ${numero}</h1><br>`;
document.body.innerHTML += `A raiz quadrada do seu número é: ${numero ** 0.5}<br>`;
document.body.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)}<br>`;
