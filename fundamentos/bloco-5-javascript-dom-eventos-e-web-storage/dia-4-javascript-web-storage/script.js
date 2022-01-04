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
  tipoFonte.addEventListener("change", function (evento) {
    let fonte = evento.target.value;
    let p = document.querySelector("p");
    p.style.fontFamily = fonte;

    localStorage.setItem("tipoFonte", fonte);
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

/* Aprofunde seus conhecimentos
Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito.
Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize este link para gerar o texto para sua página.
Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.
As pessoas devem ter o poder de alterar:
Cor de fundo da tela;
Cor do texto;
Tamanho da fonte;
Espaçamento entre as linhas do texto;
Tipo da fonte ( Font family ).
Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.
Bônus
As propriedades descritas acima são obrigatórias , mas você é livre para adicionar qualquer outra propriedade que julgar válida e que tenha como objetivo a melhora da experiência da pessoa que lê em sua página. */
