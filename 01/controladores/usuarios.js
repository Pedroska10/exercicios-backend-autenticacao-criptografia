const pool = require("../bancodedados.js");
const bcrypt = require("bcrypt");

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const verificaEmail = await pool.query(
      `select * from usuarios where email = $1`,
      [email]
    );

    if (verificaEmail.rowCount > 0) {
      return res.status(400).json({ mensagem: "Email ja cadastrado" });
    }

    const senhaCriptogafada = await bcrypt.hash(senha, 10);

    const params = [nome, email, senhaCriptogafada];

    const query = `insert into usuarios(nome, email, senha) values($1, $2, $3) returning *`;

    const { rows } = await pool.query(query, params);
    const { senha: _, ...usuario } = rows[0];

    return res.status(201).json(usuario);
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

module.exports = { cadastrarUsuario };
