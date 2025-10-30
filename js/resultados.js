$(document).ready(function () {
  const resultado = localStorage.getItem("resultado");
  const tiempoUsado = localStorage.getItem("tiempoUsado");
  const usuarioLogueado = localStorage.getItem("usuarioLogueado");

  if (usuarioLogueado) {
    $("#usuario").text(`Usuario: ${usuarioLogueado}`);
    $("#usuario").css("color", "blue");
  }

  if (resultado === "ganado") {
    $("#resultados").text("¡Felicidades! Has ganado el juego.");
    $("#resultados").css("color", "green");
    $(".fotos").append(
      '<img src="../img/ganar.jpeg" alt="foto ganadora" class="fotofinal">'
    );
  } else if (resultado === "perdido") {
    $("#resultados").text(
      "Se acabó el tiempo. Has perdido :(. Puedes volver a intentarlo."
    );
    $("#resultados").css("color", "red");
    $(".fotos").append(
      '<img src="../img/perder.jpeg" alt="foto perdedora" class="fotofinal">'
    );
  } else {
    $("#resultados").text("No hay resultado disponible.");
  }

  if (tiempoUsado && resultado != "perdido") {
    $("#tiempo").text(`Tiempo usado: ${tiempoUsado}`);
  }
});
