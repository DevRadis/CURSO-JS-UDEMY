
// usar o .lastIndexOf ele começa de trás para frente... e usando a casa para procurar ele irá iníciar da casa e voltando << no caso do exemplo ele não encontraria "o"... 
console.log(umaString.match(/[a-z]/g))

console.log(umaString.search(/t/)) // muito similar ao indexOf...

console.log(umaString.replace('Um', 'Outra')) // com o replace eu substituo a palavra...
console.log(umaString.length) // para saber quantos caracteres tem na string

console.log(umaString.slice(3, 5)) // ele contará da terceira letra até a 5, porém o 5 não aparecerá.

console.log(umaString.split(' ', 2)) // utilizado para separar palavras.

console.log(umaString.toUpperCase()) // TODAS AS LETRAS MAIUSCULAS.
console.log(umaString.toLowerCase()) // todas as letras minusculas..