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

    let siglas = [
      "AC",
      "AL",
      "AP",
      "AM",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MT",
      "MS",
      "MG",
      "PA",
      "PB",
      "PR",
      "PE",
      "PI",
      "RJ",
      "RN",
      "RS",
      "RO",
      "RR",
      "SC",
      "SP",
      "SE",
      "TO",
    ];

    for (let index = 0; index < todosEstados.length; index += 1) {
      let cria = document.createElement("option");
      cria.innerHTML = todosEstados[index];
      cria.value = siglas[index];

      estados.appendChild(cria);
    }
  }
  criaEstados();

  let botaoEnviar = document.querySelector("#enviar");

  //! Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault() . Note que isso vai impedir as validações do HTML ao fazer o submit. Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário. Caso todos os dados sejam válidos, monte uma <div> com o consolidado dos dados que foram inseridos no formulário.

  function enviarDados(event) {
    event.preventDefault();
    let nome = document.querySelector("#nome");
    let email = document.querySelector("#email");
    let cpf = document.querySelector("#cpf");
    let cidade = document.querySelector("#cidade");
    let estado = document.querySelector("#estados");
    let moradia = document.querySelector("[name=moradia]");
    let sobreMim = document.querySelector("#sobre-mim");
    let cargo = document.querySelector("#cargo");
    let desCargo = document.querySelector("#desc-cargo");
    let data = document.querySelector("#data");

    let resumo = document.querySelector("#resumo p");

    let tipo = null;
    if (moradia.checked === true) {
      tipo = "Casa";
    } else {
      tipo = "Apartamento";
    }

    resumo.innerHTML = [
      "Nome: " +
        nome.value +
        " " +
        "e-mail: " +
        email.value +
        " " +
        "CPF: " +
        cpf.value +
        " " +
        "Cidade: " +
        cidade.value +
        " " +
        "Estado: " +
        estado.value +
        " " +
        "Tipo de moradia: " +
        tipo +
        " " +
        "Descrição sobre Mim: " +
        sobreMim.value +
        " " +
        "Cargo: " +
        cargo.value +
        " " +
        "Descrição do Cargo: " +
        desCargo.value +
        " " +
        "Data: " +
        data.value,
    ];
  }
  botaoEnviar.addEventListener("click", enviarDados);

  //! Caso haja algum dado inválido, mostre em uma <div> uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada.

  //! Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.
  let botaoLimpar = document.querySelector("#limpar");
  botaoLimpar.addEventListener("click", limparCampos);

  function limparCampos() {
    let resumo = document.querySelector("#resumo");
    let resumoP = document.querySelector("#resumo p");
    resumo.removeChild(resumoP);
  }
};
