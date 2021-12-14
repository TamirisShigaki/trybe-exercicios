window.onload = function () {
  //Cor de fundo
  let corBody = document.querySelector("#body");
  corBody.addEventListener("change", function () {
    let bodySelecionado = corBody.selectedOptions[0];
    document.body.style.backgroundColor = bodySelecionado.value;

    localStorage.setItem("background-color", bodySelecionado.value);
  });

  //Cor da fonte
  let corLetra = document.querySelector("#letra");
  corLetra.addEventListener("change", function () {
    let letraSelecionada = corLetra.selectedOptions[0];
    document.body.style.color = letraSelecionada.value;

    localStorage.setItem("color", letraSelecionada.value);
  });

  //Tipo de Fonte
  let tipoFonte = document.querySelector("#fonte");
  tipoFonte.addEventListener("change", function () {
    let p = document.querySelector("p");
    p.style.fontFamily = tipoFonte;

    localStorage.setItem("fonte", tipoFonte);
  });

  //Tamanho da Fonte
  let tamFonte = document.querySelector('input[name="font-size"]');
  tamFonte.addEventListener("change", function () {
    let paragrafo = document.querySelector("p");
    paragrafo.style.fontSize = `${tamFonte.value}px`;

    localStorage.setItem("tamLetra", `${tamFonte.value}px`);
  });

  //Espaçamento entre as linhas
  let espacoLinha = document.querySelector('input[name="line-height"]');
  espacoLinha.addEventListener("change", function () {
    let linhaP = document.querySelector("p");
    linhaP.style.lineHeight = `${espacoLinha.value}px`;

    localStorage.setItem("tamLinha", `${espacoLinha.value}px`);
  });

  //Cor de fundo
  let backgroundBody = localStorage.getItem("background-color");
  document.body.style.backgroundColor = backgroundBody;

  //Cor da fonte
  let letraCor = localStorage.getItem("color");
  document.body.style.color = letraCor;

  //Tipo de Fonte
  let tipoLetra = localStorage.getItem("fonte");
  let p = document.querySelector("p");
  p.style.fontFamily = tipoLetra;

  //Tamanho da Fonte
  let tamLetra = localStorage.getItem("tamLetra");
  let paragrafo = document.querySelector("p");
  paragrafo.style.fontSize = tamLetra;

  //Espaçamento entre as linhas
  let linhaEspaco = localStorage.getItem("tamLinha");
  let linhaP = document.querySelector("p");
  linhaP.style.lineHeight = linhaEspaco;
};
