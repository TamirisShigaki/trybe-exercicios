//PARTE I - Buscando elementos
//1- Acesse o elemento elementoOndeVoceEsta.
document.getElementById("elementoOndeVoceEsta").style.backgroundColor = "red";

//2- Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.getElementById("elementoOndeVoceEsta").parentElement.style.color =
  "green";

//3- Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
document.getElementById("primeiroFilhoDoFilho").innerText = "texto aqui";

//4- Acesse o primeiroFilho a partir de pai.
document.querySelector("#pai").firstElementChild.innerText = "1filho";

//5- Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").firstElementChild.style.color =
  "white";

//6- Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.querySelector(
  "#elementoOndeVoceEsta"
).parentNode.style.backgroundColor = "orange";

//7- Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").nextElementSibling.innerText =
  "3filho";

//8- Agora acesse o terceiroFilho a partir de pai.
document.querySelector(
  "#pai"
).lastElementChild.previousElementSibling.style.color = "black";

//PARTE II -Criando elementos
//1- Crie um irmão para elementoOndeVoceEsta
let irmao = document.createElement("section");
irmao.innerText = "irmão";
document.querySelector("#pai").appendChild(irmao);

//2- Crie um filho para elementoOndeVoceEsta
let filho = document.createElement("section");
filho.innerText = "filho";
document.querySelector("#elementoOndeVoceEsta").appendChild(filho);

//3- Crie um filho para primeiroFilhoDoFilho
let filhoPrimeiro = document.createElement("section");
filhoPrimeiro.innerText = "filho1";
document.querySelector("#primeiroFilhoDoFilho").appendChild(filhoPrimeiro);

//4- A partir desse filho criado, acesse terceiroFilho

//PARTE III - Removendo elementos
//1- Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.

let listaElementos = document.querySelectorAll("section");
let pai = document.querySelector("#pai");
let elemento = document.querySelector("#elementoOndeVoceEsta");
let primeiroFilho = document.querySelector("#primeiroFilhoDoFilho");

for (let index = 0; index < listaElementos.length; index += 1) {
  let compara = listaElementos[index];
  if (compara !== pai && compara !== elemento && compara !== primeiroFilho) {
    compara.remove();
  }
}
