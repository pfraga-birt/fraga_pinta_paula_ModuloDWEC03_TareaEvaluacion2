import { CartaService } from "./services/carta.service.js";
import { CronometroService } from "./services/cronometro.service.js";

const cartasDescubiertas = [];

function abrirJuego(dificultad) {
  localStorage.setItem("dificultad", dificultad);
  window.location.href = "juego.html";
}

window.abrirJuego = abrirJuego;

$("#iniciarJuegoBtn").click(function (e) {
  e.preventDefault();
  const dificultad = localStorage.getItem("dificultad");
  const board = $("#gameBoard");
  const cronometroCaja = $("#cronometro");
  CartaService.generarTablero(dificultad, board);
  CronometroService.iniciarCronometro(dificultad, cronometroCaja);
  $(this).prop("disabled", true);
});

$("#gameBoard").on("click", ".card", function () {
  const carta = $(this);

  CartaService.girarCarta(carta);
  cartasDescubiertas.push(carta);

  if (cartasDescubiertas.length == 2) {
    const [carta1, carta2] = cartasDescubiertas;

    if (CartaService.comprobarCartas(cartasDescubiertas)) {
      setTimeout(() => {
        // Si estan "matched" no se pueden volver a girar
        carta1.addClass("matched");
        carta2.addClass("matched");
        cartasDescubiertas.length = 0;
        if ($(".card.matched").length === $(".card").length) {
          alert("¡Has ganado!");
          CronometroService.pararCronometro();
          localStorage.setItem("resultado", "ganado");
          location.href = "resultados.html";
        }
      }, 300);
    } else {
      setTimeout(() => {
        CartaService.ocultarCarta(carta1);
        CartaService.ocultarCarta(carta2);
        cartasDescubiertas.length = 0;
      }, 600);
    }
  }
});
