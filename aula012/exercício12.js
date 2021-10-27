let varA = 'A'  // B
let varB = 'B'  // C
let varC = 'C'  // A

let temporario = varA
varA = varB
varB = varC
varC = temporario

// [varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);