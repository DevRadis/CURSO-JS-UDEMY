// OPERAÇÃO TERNÁRIA

// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

/*if (pontuacaoUsuario >= 1000) {
  console.log('Usuário VIP');
} else {
  console.log('Usuário normal')
}*/

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);