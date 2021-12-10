/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false */

/* function palindromo(palavra) {
  let check = palavra.split("");
  let checkReverso = palavra.split("").reverse();

  for (let i in check) {
    if (check[i] === checkReverso[i]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(palindromo("arara"));
console.log(palindromo("desenvolvimento")); */

/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 . */
/* 
function inteiros(array) {
  let valorMaior = 0;
  for (let index in array) {
    if (array[valorMaior] < array[index]) {
      valorMaior = index;
    }
  }
  return valorMaior;
}
console.log(inteiros([2, 3, 6, 7, 10, 1])); */

/* 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 . */

function inteiros(array) {
  let valorMenor = 0;
  for (let index in array) {
    if (array[valorMenor] > array[index]) {
      valorMenor = index;
    }
  }
  return valorMenor;
}
console.log(inteiros([2, 4, 6, 7, 10, 0, -3]));

/* 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda . */

/* 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 . */

/* 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15 . */

/* 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be') ;
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan') ;
Retorno esperado: false */
