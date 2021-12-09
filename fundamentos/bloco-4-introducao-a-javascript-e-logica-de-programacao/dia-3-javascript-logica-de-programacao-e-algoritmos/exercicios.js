/* // 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
let fatorial = 10;
let resultado = fatorial;

for ( let i = 1; i < fatorial; i += 1) {
    resultado = resultado * (fatorial-i)
} 
console.log (resultado); */

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
/* let word = 'tryber';
let posicao = '';

for (let i = word.length - 1; i >= 0; i -= 1) {
    posicao = posicao + word[i];
}
console.log (posicao); */

// 3- Considere o array de strings abaixo:
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

//maior palavra
/* verificar quanto caracteres tem cada posicao da array - for 
verificar cada caracter da palavra e guardar esse valor  - for 
compara cada palavra guardada qual é mmaior - comparo duas palavras
retornar o valor da palavra maior - console.log */

/* let array = ['java', 'javascript', 'python', 'html', 'css'];
let quantCaracter = null;
let valorComparado = null; 
let posicao = null;
let maiorPalavra = null;
for (let i = 0; i < array.length; i += 1) {
     posicao = array[i]
    for (let c = 0; c < posicao.length; c += 1) {
    quantCaracter = c;
        if (quantCaracter > valorComparado) {
            valorComparado = quantCaracter
            maiorPalavra = posicao
        }
    }
}
console.log (maiorPalavra) */

//menor palavra
/* verificar cada posição do meu array e guarda cada posiçaao
verificar quanto caracteres tem cada posicao da array 
verificar cada caracter da palavra e guardar esse valor 
compara cada palavra guardada qual é menor - comparo duas palavras
retornar o valor da palavra menor - console.log */
/* let array = ['java', 'javascript', 'python', 'html', 'css'];
let quantCaracter = null; //4 
let valorComparado = quantCaracter; 
let posicao = null; //java
let menorPalavra = null;

for (let i = 0; i < array.length; i += 0) {
    posicao = array[i]
    for (let c = 0; c < posicao.length; c += 1) {
    quantCaracter = c;
        if (valorComparado < quantCaracter) {
            valorComparado = quantCaracter
            menorpalavra = posicao
        }
    }
} */

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let numero = 50;
let cont = 0;
let resultado = 0;

for (let numAtual = 0; numAtual < numero; numAtual += 1) {
  //começa em 2 pq 0e1 são divisível só por ele msm - não tem .length pq não é array
  if (numAtual % numAtual === 0) {
    // se o resto da divisão entre meu numero e ele msm é 0, soma +1
    cont += 1;
  } else if (cont === 1) {
    // se o resto da divisão for 1, o resultado vira o proprio num
    resultado = numAtual;
  } else {
    // zera o contador a cada num incluido
    cont = 0;
  }
}

console.log(resultado);
