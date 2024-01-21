const express = require("express");
const rotas = express();
const controladoresUsuarios = require("./controladores/usuarios");

rotas.post("/usuario", controladoresUsuarios.cadastrarUsuario);

module.exports = rotas;
