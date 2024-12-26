// const array = [1,2,3,4,5]

// const multiplicador = array.map((element) => {
//     console.log(element * 2);
// })

// const celcius = [0,20,30,40]

// const converter = celcius.map((index) => {
//     console.log(index * 9/5 + 32);
// })

// const pessoas = [
//     { nome: "Ana", sobrenome: "Silva" },
//     { nome: "Carlos", sobrenome: "Oliveira" },
//     { nome: "Maria", sobrenome: "Souza" }
//   ];

// const nomeCompleto = pessoas.map((index) =>{
//     console.log(index.nome,index.sobrenome);

// })

// const array = [3,5,7,9]

// const quadrado = array.map((index) => {
//     console.log(index ** 2);
// })

// const produtos = [
//     { id: 1, nome: "Camiseta", preco: 29.99 },
//     { id: 2, nome: "Calça", preco: 49.99 },
//     { id: 3, nome: "Tênis", preco: 89.99 }
//   ];

// const nomesProdutos = produtos.map((index) => {
//     console.log(index.nome);
// })

const numeros = [1, 2, 3, 4, 5, 6];

const nomeNumeros = numeros.map((index) => {
  const resposta = index % 2 == 0 ? "Par" : "Impar";
  console.log(resposta);
});
