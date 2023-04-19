//1. Crie uma função que recebe por parâmetro nome, idade e curso de um aluno. 
//Adicione essas informações em um array e exiba o array no console.

//criando uma função
function criarArray(nome, idade, curso){
  //criando o array e adicionando os parâmetros
  let aluno = [nome, idade, curso];
  // exibindo o array no console
  console.log(aluno);
}

//chamando a função
let nome = prompt('Digite seu nome: ')
let idade = Number(prompt('Digite sua idade: '))
let curso = prompt('Digte seu curso: ')

criarArray(nome, idade, curso);
