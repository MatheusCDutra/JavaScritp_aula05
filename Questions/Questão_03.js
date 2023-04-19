//3. Considere o seguinte array [10, 15, 118, 22, 10, 4]. Escreva um algoritmo que percorra o array e conte a quantidade 
// de números pares nela. (você precisará usar contadores). Ao final exiba essa quantidade.

let matriz = [10, 15, 118, 22, 10, 4];
let pares = 0;
for (i in matriz) {
  if (matriz[i] % 2 === 0) {
    pares ++;
  }
}
console.log(pares)