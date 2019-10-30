const { Client } = require("pg");
const globalDB = require("../../config/database.config");

async function getCategoria(req, res) {
  try {
    var { categId } = req.params;
    const client = new Client(globalDB);
    const query = `select * from getCategoria($1);`;
    await client.connect();
    await client.query(query, [categId], async (err, results) => {
      await client.end();
      if (!err) {
        if (results.rowCount > 0) {
          res.status(200).json({
            ok: true,
            datos: results.rows
          });
        } else {
          res.status(200).json({
            ok: false,
            datos: "datos no encontrados"
          });
        }
      } else {
        res.status(500).send({
          ok: false,
          mensaje: "error en la peticion",
          error: err
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      ok: false,
      mensaje: "error en la consulta"
    });
  }
}

async function regCategoria(req, res) {
  try {
    var { nombre } = req.body;
    const query = `select * from insertar_categoria($1);`;
    const client = new Client(globalDB);
    await client.connect();
    await client.query(query, [nombre], async (err, results) => {
      await client.end();
      if (!err) {
        if (results.rows[0].ok) {
          res.status(200).send({
            ok: true,
            mensaje: "datos agregados corectamente"
          });
        } else {
          res.status(200).send({
            ok: false,
            mensaje: "dato ya existe"
          });
        }
      } else {
        res.status(500).send({
          ok: false,
          mensaje: "error en la peticion",
          error: err
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      ok: false,
      mensaje: "error en la consulta"
    });
  }
}

async function updCategoria(req, res) {
  try {
    var { nombre } = req.body;
    const { categId } = req.params;
    const query = `select * from modificar_categoria($1,$2);`;
    const client = new Client(globalDB);
    await client.connect();
    await client.query(query, [categId, nombre], async (err, results) => {
      await client.end();
      if (!err) {
        if (results.rows[0].ok) {
          res.status(200).send({
            ok: true,
            mensaje: "datos actualizado corectamente"
          });
        } else {
          res.status(200).send({
            ok: false,
            mensaje: "datos no encontrados"
          });
        }
      } else {
        res.status(500).send({
          ok: false,
          mensaje: "error en la peticion",
          error: err
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      ok: false,
      mensaje: "error en la consulta"
    });
  }
}

async function delCategoria(req, res) {
  try {
    var { categId } = req.params;
    const client = new Client(globalDB);
    const query = `select * from eliminar_categoria($1);`;
    await client.connect();
    await client.query(query, [categId], async (err, results) => {
      await client.end();
      if (!err) {
        if (results.rows[0].ok) {
          res.status(200).send({
            ok: true,
            mensaje: "datos eliminado correctamente"
          });
        } else {
          res.status(200).send({
            ok: false,
            mensaje: "datos no encontrados"
          });
        }
      } else {
        res.status(500).send({
          ok: false,
          mensaje: "error en la peticion",
          error: err
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      ok: false,
      mensaje: "error en la consulta"
    });
  }
}

module.exports = { getCategoria, regCategoria, updCategoria, delCategoria };
