window.onload = function () {
  function criaEstados() {
    let estados = document.querySelector("#estados");
    let todosEstados = [
      "Acre",
      "Alagoas",
      "Amapá",
      "Amazonas",
      "Bahia",
      "Ceará",
      "Distrito Federal",
      "Espírito Santo",
      "Goiás",
      "Maranhão",
      "Mato Grosso",
      "Mato Grosso do Sul",
      "Minas Gerais",
      "Pará",
      "Paraíba",
      "Paraná",
      "Pernambuco",
      "Piauí",
      "Rio de Janeiro",
      "Rio Grande do Norte",
      "Rio Grande do Sul",
      "Rondônia",
      "Roraima",
      "Santa Catarina",
      "São Paulo",
      "Sergipe",
      "Tocantins",
    ];

    for (let index = 0; index < todosEstados.length; index += 1) {
      let cria = document.createElement("option");
      cria.innerHTML = todosEstados[index];

      estados.appendChild(cria);
    }
  }
  criaEstados();

  let botaoEnviar = document.querySelector("#enviar");
  botaoEnviar.addEventListener("click", enviarDados);

  let botaoLimpar = document.querySelector("#limpar");
  botaoLimpar.addEventListener("click", limparCampos);
};

/* Logo abaixo do formulário, crie um botão que:
Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault() . Note que isso vai impedir as validações do HTML ao fazer o submit
Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário.
Caso todos os dados sejam válidos, monte uma <div> com o consolidado dos dados que foram inseridos no formulário.
Caso haja algum dado inválido, mostre em uma <div> uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada.
Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também. */
