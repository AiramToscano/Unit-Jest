/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (name, idade) => { // funçao recebe dois parametros name e idade;
  if (!name || !idade) {
    return undefined; // funcao verifica se recebe um parametro vazio, caso receba retorna undefined
  }
  // usando template literals, consigo 'concartenar' string com numeros e retornar o resultado esperado.
  return `Oi, meu nome é ${name}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
};

module.exports = vqv;
