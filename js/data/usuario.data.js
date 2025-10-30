import { Usuario } from "../models/usuario.models.js";

const usuarios = `[{"id": 1,"nombre": "Iker","apellido": "Arana","usuario": "iarana","contrasenia": "1234Abcd"},{"id": 2,"nombre": "Ander","apellido": "Goikoetxea","usuario": "agoikoetxea","contrasenia": "5678Efgh"},{"id": 3,"nombre": "Jokin","apellido": "Olano","usuario": "jolano","contrasenia": "9012Ijkl"}]`;

const Usuarios_JSON = JSON.parse(usuarios).map(
  (usuario) =>
    new Usuario(
      usuario.id,
      usuario.nombre,
      usuario.apellido,
      usuario.usuario,
      usuario.contrasenia
    )
);

function guardarUsuarios() {
  localStorage.setItem("usuarios", JSON.stringify(Usuarios_JSON));
}

export const UsuarioData = {
  guardarUsuarios: guardarUsuarios,
};
