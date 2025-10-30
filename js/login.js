import { LoginService } from "./services/login.service.js";

$("#loginForm").submit(function (e) {
  e.preventDefault();

  const usuario = $("#usuario").val();
  const contrasenia = $("#contrasenia").val();

  if (!LoginService.alphanumericCheck(contrasenia)) {
    alert("La contraseña no cumple los requisitos");
    $("#contrasenia").val("");
    return;
  }

  const is_logged = LoginService.comprobarLogin(usuario, contrasenia);
  if (is_logged) {
    window.location.href = "pages/home.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});
