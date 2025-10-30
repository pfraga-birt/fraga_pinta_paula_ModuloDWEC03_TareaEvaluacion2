import { Carta } from "../models/carta.models.js";

function generarTablero(nivel, board) {
  let numCartas, columnas;

  switch (nivel) {
    case "facil":
      numCartas = 4;
      columnas = 4;
      break;
    case "medio":
      numCartas = 9;
      columnas = 6;
      break;
    case "avanzado":
      numCartas = 12;
      columnas = 8;
      break;
  }

  const cartas = [];
  for (let i = 1; i <= numCartas; i++) {
    cartas.push(new Carta(i, i));
  }

  // ... es crea una copia del array para poder luego mezclar las cartas
  const cartasDuplicadas = [...cartas, ...cartas];
  cartasDuplicadas.sort(() => Math.random() - 0.5);

  board.empty();
  cartasDuplicadas.forEach((carta) => {
    const cardElement = $(`
      <div class="card" data-simbolo="${carta.simbolo}">?</div>
    `);
    board.append(cardElement);
  });

  board.css("grid-template-columns", `repeat(${columnas}, 1fr)`);
  return cartasDuplicadas;
}

function girarCarta(carta) {
  const card = $(carta);
  // Para que si ya está dada la vuelta que no se vuelva a girar
  if (card.hasClass("flipped") || card.hasClass("matched")) return;

  const simbolo = card.data("simbolo");
  card.text(simbolo);
  card.addClass("flipped");
}

function ocultarCarta(carta) {
  const card = $(carta);
  card.text("?");
  card.removeClass("flipped");
}

function comprobarCartas(cartas) {
  const simbolo1 = cartas[0].data("simbolo");
  const simbolo2 = cartas[1].data("simbolo");
  return simbolo1 == simbolo2;
}

export const CartaService = {
  generarTablero: generarTablero,
  girarCarta: girarCarta,
  ocultarCarta: ocultarCarta,
  comprobarCartas: comprobarCartas,
};
