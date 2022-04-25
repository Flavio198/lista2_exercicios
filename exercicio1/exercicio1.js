/* 

1. Crie um algoritmo que solicite para o usuário informar um número qualquer 7x. Adicione cada número informado pelo usuário em uma lista. No final utilize o forEach para mostrar cada elemento da lista. 

*/
let listaNumeros = [];

for (let i = 0; i < 7; i++) {
  let numeroDigitado = Number(window.prompt(`Digite o ${i + 1}º número: `));

  if (!numeroDigitado) {
    alert("Você não digitou nenhum valor, tente novamente!");
    break;
  }

  listaNumeros.push(numeroDigitado);
}

listaNumeros.forEach((DentrodoArray) => console.log(DentrodoArray));
