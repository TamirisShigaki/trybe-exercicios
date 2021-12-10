//1- Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

/* const a = 10;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b); */

//2- Faça um programa que retorne o maior de dois números.

/* const primeiroNumero = 10;
const segundoNumero = 5;

if (primeiroNumero > segundoNumero) {
  console.log(primeiroNumero);
} else {
  console.log(segundoNumero);
}
 */
//3- Faça um programa que retorne o maior de três números.

/* const num1 = 10;
const num2 = 20;
const num3 = 30;
let maiorNum = 0;

if (num1 > num2 && num1 > num3) {
  maiorNum = num1;
} else if (num2 > num1 && num2 > num3) {
  maiorNum = num2;
} else {
  maiorNum = num3;
}
console.log(maiorNum); */

//4- Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

/* const positivoOuNegativo = 3;

if (positivoOuNegativo > 0) {
  console.log("Numero Positivo");
} else if (positivoOuNegativo < 0) {
  console.log("Numero Negativo");
} else {
  console.log("0");
} */

//5- Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo.

/* const angulo1 = 60;
const angulo2 = 70;
const angulo3 = 50;

if (angulo1 >= 0 && angulo2 >= 0 && angulo3 >= 0) {
  if (angulo1 + angulo2 + angulo3 === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("valor invalido");
} */

//6- Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.Exemplo: bishop (bispo) -> diagonals (diagonais)

/* let nomePeca = "bispo";
switch (nomePeca.toLowerCase()) {
  case "bispo":
    console.log("Diagonais");
    break;
  case "peao":
    console.log("Para frente");
    break;
  case "torre":
    console.log("Linha reta");
    break;
  case "cavalo":
    console.log("Em 'L'");
    break;
  case "rainha":
    console.log("Em todas as direções");
    break;
  case "rei":
    console.log("Em todas as direções apenas 1 casa");
    break;
  default:
    console.log("Essa não é uma peça valida");
    break;
} */

/*7- Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F */

/* let nota = 86;

if (nota < 50 && nota > 0) {
  console.log("Sua nota é F");
} else if (nota >= 50 && nota < 60) {
  console.log("Sua nota é E");
} else if (nota >= 60 && nota < 70) {
  console.log("Sua nota é D");
} else if (nota >= 70 && nota < 80) {
  console.log("Sua nota é C");
} else if (nota >= 80 && nota < 90) {
  console.log("Sua nota é B");
} else if (nota >= 90 && nota < 100) {
  console.log("Sua nota é A");
} else {
  console.log("Nota invalida");
} */

//8- Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

/* const num1 = 5;
const num2 = 15;
const num3 = 20;
let par = false;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  par = true;
}
console.log(par); */

//9- Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

/* const num1 = 5;
const num2 = 15;
const num3 = 20;
let impar = false;
if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
  impar = true;
}
console.log(impar); */

//10- Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.Atente que, sobre o custo do produto, incide um imposto de 20%.Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo. valorCustoTotal = valorCusto + impostoSobreOCusto. lucro = valorVenda - valorCustoTotal (lucro de um produto)

/* const valorCusto = 10;
const valorVenda = 100;
const custoTotal = valorCusto * 0.2 + valorCusto;

if (valorCusto === 0 || valorVenda === 0) {
  console.log("Você não definiu um valor de venda ou de custo");
} else {
  console.log((valorVenda - custoTotal) * 1000);
} */

//11- Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
//INSS

/* let salarioBruto = 3000;
let salarioLiquido = null;

if (salarioBruto <= 1556.94 && salarioBruto > 0) {
  salarioLiquido = salarioBruto - salarioBruto * 0.08;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  salarioLiquido = salarioBruto - salarioBruto * 0.09;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  salarioLiquido = salarioBruto - salarioBruto * 0.11;
} else if (salarioBruto > 5189.82) {
  salarioLiquido = salarioBruto - 570.88;
} */

//IR (Imposto de Renda)
/* if (salarioLiquido > 4664.68) {
    salarioLiquido = salarioLiquido - (((27.5 * salarioLiquido) / 100) - 869.36);
}else if (salarioLiquido > 3751.06 && salarioLiquido <= 4664.68){
    salarioLiquido = salarioLiquido - (((22.5 * salarioLiquido) / 100) - 636.13);
}else if (salarioLiquido > 2826.66 && salarioLiquido <= 3751.06){
    salarioLiquido = salarioLiquido - (((15 * salarioLiquido) / 100) - 354.80);
}else if (salarioLiquido > 1903.99 && salarioLiquido <= 2826.66){
    salarioLiquido = salarioLiquido - (((7.5 * salarioLiquido) / 100) - 142.80);
} */
