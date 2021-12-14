window.onload = function () {
  let corBody = document.querySelector("#body");
  corBody.addEventListener("change", function () {
    let bodySelecionado = corBody.selectedOptions[0];
    document.body.style.backgroundColor = bodySelecionado.value;

    localStorage.setItem("background-color", bodySelecionado.value);
  });

  let corLetra = document.querySelector("#letra");
  corLetra.addEventListener("change", function () {
    let letraSelecionada = corLetra.selectedOptions[0];
    document.body.style.color = letraSelecionada.value;

    localStorage.setItem("color", letraSelecionada.value);
  });

  let tamFonte = document.querySelector('input[name="font-size"]');
  tamFonte.addEventListener("change", function () {
    let p = document.querySelector("p");
    p.style.fontSize = `${tamFonte.value}px`;

    localStorage.setItem("tam", `${tamFonte.value}px`);
  });

  let backgroundBody = localStorage.getItem("background-color");
  document.body.style.backgroundColor = backgroundBody;

  let letraCor = localStorage.getItem("color");
  document.body.style.color = letraCor;

  let tamLetra = localStorage.getItem("tam");
  let p = document.querySelector("p");
  p.style.fontSize = tamLetra;
};
