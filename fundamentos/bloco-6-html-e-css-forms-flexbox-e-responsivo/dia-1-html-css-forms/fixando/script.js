// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function primeira(evento) {
  evento.preventDefault();
}

function segunda(evento2) {
  evento2.preventDefault();
}

function terceira(evento3) {
  let letra = event.key;
  if (letra !== "a") {
    evento3.preventDefault();
  }
}

HREF_LINK.addEventListener("click", primeira);
INPUT_CHECKBOX.addEventListener("click", segunda);
INPUT_TEXT.addEventListener("keypress", terceira);

/* Para fixar:
1 - Adicione um evento click no elemento a que possui o id href . Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.
2 - Adicione um evento click no elemento checkbox que possui o id input-checkbox . Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.
3 - Adicione um evento keypress no elemento input type="text" que possui o id input-text . Na função do evento, implemente o método .preventDefault() de forma que somente o caractere a (letra 'a' minúscula) possa ser digitado na caixinha. ( dica: para capturar a tecla digitada, utilize o event.key ) */
