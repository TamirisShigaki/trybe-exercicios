//PARTE I - Buscando elementos
//1- Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

//2- Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = document.getElementById("elementoOndeVoceEsta");
pai.style.color = "green";

//3- Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = "texto aqui";

//4- Acesse o primeiroFilho a partir de pai.
const primeiroFilho = pai.firstElementChild;

//5- Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilho = elementoOndeVoceEsta.previousElementSibling;

//6- Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const texto = elementoOndeVoceEsta.nextSibling;

//7- Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

//8- Agora acesse oterceiroFilho a partir de pai.
const terceiroFilho = pai.lastElementChild.previousElementSibling;

//PARTE II -Criando elementos
//1- Crie um irmão para elementoOndeVoceEsta
let pai = document.getElementById("pai");
let novoIrmao = document.createElement("section");
novoIrmao.id = "novoIrmaoElemento";
pai.appendChild(novoIrmao);

//2- Crie um filho para elementoOndeVoceEsta
let elementoOndeVoceEsta = document.getElementById(elementoOndeVoceEsta);
let novoFilho = document.createElement("section");
novoFilho.id = "novoFilho";
elementoOndeVoceEsta.appendChild(novoFilho);

//3- Crie um filho para primeiroFilhoDoFilho
let primeiroFilhoDoFilho = document.getElementById(primeiroFilhoDoFilho);
let filhoNovo = document.createElement("section");
filhoNovo.id = "filhoNovo";
primeiroFilhoDoFilho.appendChild(filhoNovo);

//4- A partir desse filho criado, acesse terceiroFilho
let terceiroFilho = filhoNovo.parentElement.parentElement.nextElementSibling;
