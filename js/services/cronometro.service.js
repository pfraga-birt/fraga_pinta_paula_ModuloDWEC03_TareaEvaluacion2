import { Cronometro } from "../models/cronometro.models.js";

function iniciarCronometro(dificultad, cronometroCaja) {
  const cronometro = new Cronometro();

  switch (dificultad) {
    case "facil":
      cronometro.segundos = 30;
      break;
    case "medio":
      cronometro.segundos = 40;
      break;
    case "avanzado":
      cronometro.segundos = 50;
      break;
    default:
      throw new Error("Dificultad no válida");
  }

  // Primero el texto para que no empiece a contar desde 1 segundo después
  cronometroCaja.text(
    `${"0" + cronometro.horas}:${"0" + cronometro.minutos}:${
      cronometro.segundos
    }`
  );

  // Callback para cuando se acabe el tiempo, espera a que se termine el intervalo para ejecutar el callback
  cuentaAtras(cronometro, cronometroCaja, () => {
    alert("¡Se ha acabado el tiempo!");
    localStorage.setItem("resultado", "perdido");
    localStorage.setItem("tiempoUsado", cronometroCaja.text());
    location.href = "resultados.html";
  });
}

function cuentaAtras(cronometro, cronometroCaja, callback) {
  // setinterval ejecuta una función en intervalos de tiempo regulares
  const intervalo = setInterval(() => {
    cronometro.segundos--;
    cronometroCaja.text(
      `${"0" + cronometro.horas}:${"0" + cronometro.minutos}:${
        cronometro.segundos
      }`
    );
    if (cronometro.segundos <= 0) {
      clearInterval(intervalo);
      callback();
    }
  }, 1000);
}

function pararCronometro(intervalo) {
  clearInterval(intervalo);
  const cronometroCaja = $("#cronometro");
  localStorage.setItem("tiempoUsado", cronometroCaja.text());
  cronometroCaja.text("00:00:00");
}

export const CronometroService = {
  iniciarCronometro: iniciarCronometro,
  cuentaAtras: cuentaAtras,
  pararCronometro: pararCronometro,
};
