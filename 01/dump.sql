CREATE DATABASE catalogo_pokemons

CREATE TABLE usuarios (
	id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  senha TEXT NOT NULL
);

CREATE TABLE pokemons(
	id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  habilidades TEXT NOT NULL,
  imagem text,
  apelido text,
  usuario_id INTEGER NOT NULL REFERENCES usuarios(id)
);







