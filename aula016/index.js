let numero = Number(prompt('Digite um número'));
// ou fazer numero = Number(numero) sem o number acima.
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>A raiz quadrada do seu número é: ${numero ** 0.5}</p></br>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p></br>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p></br>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p></br>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p></br>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p></br>`;



/*
document.body.innerHTML += `<h1>Seu número é: ${numero}</h1><br>`;
document.body.innerHTML += `A raiz quadrada do seu número é: ${numero ** 0.5}<br>`;
document.body.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)}<br>`;
document.body.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}<br>`;
document.body.innerHTML += `Arredondando para cima: ${Math.ceil(numero)}<br>`;
document.body.innerHTML += `Com duas casas decimais: ${(numero.toFixed(2))}<br>`;
*/