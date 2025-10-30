import { UsuarioData } from "../data/usuario.data.js";

UsuarioData.guardarUsuarios();

function comprobarLogin(usuario, contrasenia) {
  const usuariosStorage = localStorage.getItem("usuarios");
  const usuarioEncontrado = JSON.parse(usuariosStorage).find(
    (usr) => usr.usuario == usuario && usr.contrasenia == contrasenia
  );
  if (usuarioEncontrado) {
    localStorage.setItem("usuarioLogueado", usuario);
    return true;
  } else {
    return false;
  }
}

function alphanumericCheck(str) {
  const regex = /^[a-z0-9]+$/i;
  return regex.test(str);
}

export const LoginService = {
  comprobarLogin: comprobarLogin,
  alphanumericCheck: alphanumericCheck,
};
