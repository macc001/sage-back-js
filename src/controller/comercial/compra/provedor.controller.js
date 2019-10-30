const { Client } = require("pg");
const globalDB = require("../../../config/database.config");

async function getProvedor(req, res) {
  try {
    var { proveId } = req.params;
    const client = new Client(globalDB);
    const query = `select * from getProveedor($1);`;
    await client.connect();
    await client.query(query, [proveId], async (err, results) => {
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

async function regProvedor(req, res) {
  try {
    var { nombre, telefono, email, direccion } = req.body;
    const Subirfoto = req.files;
    res.status(200).send({
      ok: true,
      messagge: "en construccion"
    });
  } catch (error) {
    res.status(500).send({
      ok: false,
      mensaje: "error en la consulta"
    });
  }
}

async function updProvedor(req, res) {
  try {
    var { nombre, telefono, email, direccion } = req.body;
    const Subirfoto = req.files;
    res.status(200).send({
      ok: true,
      messagge: "en construccion"
    });
  } catch (error) {
    res.status(500).send({
      ok: false,
      mensaje: "error en la consulta"
    });
  }
}

async function delProvedor(req, res) {
  try {
    var { proveId } = req.params;
    const client = new Client(globalDB);
    const query = `select * from eliminar_Provedor($1)`;
    await client.connect();
    await client.query(query, [proveId], async (err, results) => {
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

module.exports = { getProvedor, regProvedor, updProvedor, delProvedor };
