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
  botaoEnviar.addEventListener("click", function () {
    const validation = new JustValidate("#enviar", {
      errorFieldCssClass: "is-invalid",
    });

    validation
      .addField("#nome", [
        {
          rule: "minLength",
          value: 11,
        },
        {
          rule: "maxLength",
          value: 40,
        },
        {
          rule: "required",
          errorMessage: "Campo obrigatório",
        },
      ])
      .addField("#email", [
        {
          rule: "required",
          errorMessage: "Campo obrigatório",
        },
        {
          rule: "email",
          errorMessage: "Email inválido!",
        },
      ])
      .addField("#cpf", [
        {
          rule: "minLength",
          value: 11,
        },
        {
          rule: "maxLength",
          value: 11,
        },
        {
          rule: "cpf",
          errorMessage: "CPF inválido!",
        },
      ])
      .addField("#endereço", [
        {
          rule: "minLength",
          value: 4,
        },
        {
          rule: "maxLength",
          value: 200,
        },
        {
          rule: "required",
          errorMessage: "Campo obrigatório",
        },
      ])
      .addField("#cidade", [
        {
          rule: "minLength",
          value: 3,
        },
        {
          rule: "maxLength",
          value: 28,
        },
        {
          rule: "required",
          errorMessage: "Campo obrigatório",
        },
      ])
      .addField("#estado", [
        {
          rule: "required",
        },
      ])
      .addField("#moradia", [
        {
          rule: "required",
        },
      ])
      .addField("#sobre-mim", [
        {
          rule: "minLength",
          value: 5,
        },
        {
          rule: "maxLength",
          value: 1000,
        },
        {
          rule: "required",
          errorMessage: "Campo obrigatório",
        },
      ])
      .addField("#cargo", [
        {
          rule: "minLength",
          value: 2,
        },
        {
          rule: "maxLength",
          value: 40,
        },
        {
          rule: "required",
          errorMessage: "Campo obrigatório",
        },
      ])
      .addField("#desc-cargo", [
        {
          rule: "minLength",
          value: 5,
        },
        {
          rule: "maxLength",
          value: 40,
        },
        {
          rule: "required",
          errorMessage: "Campo obrigatório",
        },
      ])
      .addField("#datepicker", [
        {
          rule: "required",
        },
      ]);
  });

  function limpar() {
    let resumo = document.querySelector("#resumo");
    let erros = document.querySelector("#erros");
    let limparResumo = document.querySelectorAll("#resumo p");
    let limparErros = document.querySelectorAll("#erros p");
    if (limparErros.length > 0) {
      for (let i of limparErros) {
        erros.removeChild(i);
      }
    }

    if (limparResumo.length > 0) {
      for (let possicao of limparResumo) {
        resumo.removeChild(possicao);
      }
    }
  }

  let botaoLimpar = document.querySelector("#limpar");

  botaoLimpar.addEventListener("click", limpar);

  //! data

  var field = document.getElementById("datepicker");
  var picker = new Pikaday({
    onSelect: function () {
      field.value = picker.toString();
    },
  });
  field.parentNode.insertBefore(picker.el, field.nextSibling);
};
