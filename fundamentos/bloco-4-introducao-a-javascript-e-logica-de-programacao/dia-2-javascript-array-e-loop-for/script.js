//1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers); */

//2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
for (let index = 0; index < numbers.length; index += 1) {
  resultado = resultado + numbers[index];
}
console.log(resultado); */

//3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
let media = resultado / numbers.length;

for (let index = 0; index < numbers.length; index += 1) {
  resultado = resultado + numbers[index];
}
console.log(media); */

//4- Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
/* if (media <= 20) {
  console.log("Valor menor ou igual a 20");
} else {
  console.log("Valor maior que 20");
} */

//5- Utilizando for , descubra qual o maior valor contido no array e imprima-o;
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorComparado = null;

for (let index = 0; index < numbers.length; index += 1) {
  if (valorComparado < numbers[index]) {
    valorComparado = numbers[index];
  }
}
console.log(valorComparado); */

//6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantNumImpar = null;
for (const contador of numbers) {
  if (contador % 2 === 1) {
    quantNumImpar = quantNumImpar + 1;
  } else {
    return "nenhum valor ímpar encontrado";
  }
}
console.log(quantNumImpar); */

//7- Utilizando for , descubra qual o menor valor contido no array e imprima-o;
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorComparado = null;

for (let index = 0; index < numbers.length; index += 1) {
  if (valorComparado === null) {
    valorComparado = numbers[index];
  }
  if (valorComparado > numbers[index]) {
    valorComparado = numbers[index];
  }
}
console.log(valorComparado); */

//8- Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let numAte25 = [];

for (let index = 1; index <= 25; index += 1) {
  numAte25.push(index);
}
console.log(numAte25);

//9- Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let divisao = [];

for (let index = 0; index < numAte25.length; index += 1) {
  divisao.push(numAte25[index] / 2);
}
console.log(divisao);
