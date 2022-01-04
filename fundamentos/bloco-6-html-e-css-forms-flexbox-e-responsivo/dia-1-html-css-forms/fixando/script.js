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
