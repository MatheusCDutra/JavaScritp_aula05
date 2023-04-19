//5. Crie uma função. Dentro da função leia 10 números. Se o número for par, adicione o número em um array de pares. 
//Se o número for ímpar adicione-o em um array de ímpares.


function parImpar() {
  let pares = [];
  let impares = [];

  for (let i = 0; i < 10; i++) {
    let numero = Number(prompt(`Digite o ${i}º número`));
    if (numero % 2 == 0) {
    pares.push(numero);
    } else {
    impares.push(numero);
    }
  }
  console.log(pares);
  console.log(impares);
}
parImpar()




