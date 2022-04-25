/* 

5. Faça a mesma atividade anterior, mas troque o função findIndex pela função find. Dica: para localizar o indíce do elemento na lista é possível utilizar a função interna do array chamada indexOf (veja a documentação e aprenda a como utilizar) 

*/

let produtos = [
  "liquidificador",
  "cafeteira",
  "batedeira",
  "microondas",
  "torradeira",
  "fogão",
  "forno",
];

let produtoEscolhido = window
  .prompt("Informe o produto da compra: ")
  .toLowerCase();

let produtoEncontrado = produtos.find(
  (elemento) => elemento === produtoEscolhido
);

// encontrar o indice para remover o produto do array com o splice
let indiceEncontrado = produtos.indexOf(produtoEncontrado);

console.log(indiceEncontrado);

if (indiceEncontrado === -1) {
  alert("Desculpe, este produto está indisponível nesta loja!");
} else {
  alert(
    `Parabens! A compra do seu produto: ${produtoEncontrado} foi efetuada com sucesso!`
  );

  produtos.splice(indiceEncontrado, 1);
}

alert(`Os produtos ainda disponiveis em loja são: ${produtos}`);
