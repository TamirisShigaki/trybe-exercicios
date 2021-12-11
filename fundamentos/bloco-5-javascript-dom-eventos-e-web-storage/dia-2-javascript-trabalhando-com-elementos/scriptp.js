//PARTE
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
