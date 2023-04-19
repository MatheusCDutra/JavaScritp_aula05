//2. Crie uma função que recebe três notas por parâmetro, adicione as três notas em um novo array. 
//Calcule sua média a partir dos índices e em seguida exiba o array na tela.
//2.1 Agora antes de calcular a média, acesse o valor do segundo item do array e o divida por 2.

function calcMedia(nota_01, nota_02, nota_03) {
  notas = [nota_01, nota_02, nota_03];
  notas[1] /= 2
  media = (notas[0] + notas[1] + notas[2]) / 3;
  console.log(media.toFixed(2));
}

let nota_01 = Number(prompt('Digite a primeira nota: '));
let nota_02 = Number(prompt('Digite a segunda nota: '));
let nota_03 = Number(prompt('Digite a terceira nota: '));

calcMedia(nota_01, nota_02, nota_03);
