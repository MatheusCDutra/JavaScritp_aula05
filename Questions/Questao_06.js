// Considere o seguinte array [100, 20, 45, 1, 3, 19, 5] escreva um algoritmo que irá ordená-lo em ordem crescente. Ou seja, do menor valor para o maior valor.




const matriz = [100, 20, 45, 1, 3, 19, 5]; // Declaração de um array chamado 'matriz' com os valores a serem ordenados

function ordenarArray(arr) { // Declaração de uma função chamada 'ordenarArray', que recebe um array como argumento e não retorna nenhum valor
  let temp; // Declaração de uma variável temporária chamada 'temp' para armazenar temporariamente o valor de um elemento durante a troca
  for (let i = 0; i < arr.length - 1; i++){ // Loop externo que percorre todo o array, exceto o último elemento
    for (let j = 0; j < arr.length - i - 1; j++){ // Loop interno que percorre todo o array, exceto os elementos já ordenados no final
      if (arr[j] > arr[j + 1]) { // Verifica se o elemento atual é maior que o próximo elemento
        temp = arr[j]; // Armazena temporariamente o valor do elemento atual na variável 'temp'
        arr[j] = arr[j + 1]; // Atribui o valor do próximo elemento ao elemento atual
        arr[j + 1] = temp; // Atribui o valor armazenado em 'temp' ao próximo elemento
      }
    }
  }
  console.log(arr); // Exibe o array ordenado no console
}

ordenarArray(matriz); // Chama a função 'ordenarArray' e passa o array 'matriz' como argumento

