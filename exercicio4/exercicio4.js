/* 

4. Crie uma lista com 7 produtos eletrodomésticos e pergunte para o usuário qual produto ele deseja comprar.
Utilize o método findIndex para verificar se o produto que o usuário quer existe dentro da lista, se o produto existir mostre uma mensagem parabenizando pela compra e remova o produto da lista utilizando o splice. 
   
*/

let produtos = [
  "Notebook",
  "Televisão",
  "Balança",
  "Microondas",
  "Torradeira",
  "Sofá",
  "Celular",
];

let produtoEscolhido = window
  .prompt("Informe o produto da compra: ")
  .toLowerCase();

let indiceEncontrado = produtos.findIndex(
  (elemento) => elemento === produtoEscolhido
);

if (indiceEncontrado === -1) {
  alert("Produto indisponível nesta loja!");
} else {
  alert(
    `Parabens! Você acabou de comprar o item ${produtos[indiceEncontrado]}`
  );

  produtos.splice(indiceEncontrado, 1);
}

alert(`Os produtos ainda disponivel em loja são: ${produtos}`);
