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
  botaoEnviar.addEventListener("click", function (evento) {
    evento.preventDefault();
    let valores = [
      "nome",
      "email",
      "cpf",
      "endereço",
      "cidade",
      "moradia",
      "estados",
      "sobre-mim",
      "cargo",
      "desc-cargo",
      "data",
    ];
    limpar();
    for (let index of valores) {
      let resumo = document.querySelector("#resumo");
      let erros = document.querySelector("#erros");
      let cria = document.createElement("p");
      let validarCampo = document.querySelector(`[name=${index}]`).value;

      if (validarCampo === "Casa") {
        let tipoCasa = document.querySelector("[name=moradia]").checked;
        if (tipoCasa === true) {
          cria.innerHTML = `${index}: Casa`;
          resumo.appendChild(cria);
        } else {
          cria.innerHTML = `${index}: Apartamento`;
          resumo.appendChild(cria);
        }
      } else if (validarCampo.length > 0) {
        cria.innerHTML = `${index}: ${validarCampo}`;
        resumo.appendChild(cria);
      } else {
        cria.innerHTML = `Você deve preencher o campo: ${index}`;
        erros.appendChild(cria);
      }
    }
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
