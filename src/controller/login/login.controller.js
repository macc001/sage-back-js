const { Pool } = require("pg");
const hash = require("object-hash");
const jwt = require("jwt-simple");
const jwt1 = require("../../service/jwt.service");
const secret = require("../../config/global.config");

async function login(req, res) {
  try {
    var { cod_user, passw } = req.body;
    const encripPassw = hash.sha1(passw);
    const client = new Pool(req.database);
    const queryy = "select * from administracion.login($1,$2);";
    const results = await client.query(queryy, [cod_user, encripPassw]);
    await client.end();
    if (results.rows[0].ok) {
      var datos = results.rows[0];
      res.status(200).json({
        ok: true,
        datos,
        token: jwt1.createToken(datos, req.database.id)
      });
    } else {
      res.json({
        ok: false,
        messagge: results.rows[0].mensaje
      });
    }
  } catch (error) {
    res.json({
      ok: false,
      messagge:
        "error en la conexion de la base de datos, consulta con el administrador",
      error: error.stack
    });
  }
}

async function salir(req, res) {
  try {
    const client = new Pool(req.database);
    const queryy = "select * from administracion.salir($1);";
    const results = await client.query(queryy, [req.id_usuario]);
    await client.end();
    if (results.rows[0].ok) {
      res.status(200).json({
        ok: true,
        messagge: results.rows[0].mensaje
      });
    } else {
      res.json({
        ok: false,
        messagge: results.rows[0].mensaje
      });
    }
  } catch (error) {
    res.json({
      ok: false,
      messagge:
        "error en la conexion de la base de datos, consulta con el administrador",
      error: error.stack
    });
  }
}

async function registrar_contra(req, res) {
  try {
    var { cod_user, passw1 } = req.body;
    const encripPassw = hash.sha1(passw1);
    const client = new Pool(req.database);
    const queryy = "select * from administracion.reg_passw($1,$2);";
    const results = await client.query(queryy, [cod_user, encripPassw]);
    await client.end();
    if (results.rows[0].ok) {
      res.status(200).json({
        ok: true,
        messagge: results.rows[0].mensaje
      });
    } else {
      res.json({
        ok: false,
        messagge: results.rows[0].mensaje
      });
    }
  } catch (error) {
    res.json({
      ok: false,
      messagge:
        "error en la conexion de la base de datos, consulta con el administrador",
      error: error.stack
    });
  }
}

async function validar_user(req, res) {
  try {
    var { cod_user } = req.body;
    const client = new Pool(req.database);
    const queryy = "select * from administracion.verif_user($1);";
    const results = await client.query(queryy, [cod_user]);
    await client.end();
    if (results.rows[0].ok) {
      res.status(200).json({
        ok: true,
        messagge: results.rows[0].mensaje
      });
    } else {
      res.json({
        ok: false,
        messagge: results.rows[0].mensaje
      });
    }
  } catch (error) {
    res.json({
      ok: false,
      messagge:
        "error en la conexion de la base de datos, consulta con el administrador",
      error: error.stack
    });
  }
}

async function reset_contra(req, res) {
  try {
    var { cod_user } = req.body;
    const client = new Pool(req.database);
    const queryy = "select * from administracion.reset_passw($1);";
    const results = await client.query(queryy, [cod_user]);
    await client.end();
    if (results.rows[0].ok) {
      res.status(200).json({
        ok: true,
        messagge: results.rows[0].mensaje
      });
    } else {
      res.json({
        ok: false,
        messagge: results.rows[0].mensaje
      });
    }
  } catch (error) {
    res.json({
      ok: false,
      messagge:
        "error en la conexion de la base de datos, consulta con el administrador",
      error: error.stack
    });
  }
}
async function renovartoken(req, res) {
  try {
    var token = req.headers.authorization.replace(/['"]+/g, "");
    const renovar = jwt.decode(token, secret.secret_token);
    res.status(200).send({
      ok: true,
      token: jwt1.createToken(renovar)
    });
  } catch (error) {
    res.json({
      ok: true,
      mensaje: "error al renovar token"
    });
  }
}

module.exports = {
  login,
  salir,
  registrar_contra,
  validar_user,
  reset_contra,
  renovartoken
};
