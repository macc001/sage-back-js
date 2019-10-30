const { Client } = require("pg");
const globalDB = require("../../config/database.config");

async function getAlmacen(req, res) {
  try {
    var { almacenId } = req.params;
    const client = new Client(globalDB);
    const query = `select * from getAlmacen($1);`;
    await client.connect();
    await client.query(query, [almacenId], async (err, results) => {
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

async function regAlmacen(req, res) {
  try {
    var { nombre, ubicacion } = req.body;
    const query = `select * from insertar_almacen($1,$2);`;
    const client = new Client(globalDB);
    await client.connect();
    await client.query(query, [nombre, ubicacion], async (err, results) => {
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

async function updAlmacen(req, res) {
  try {
    var { nombre, ubicacion } = req.body;
    const { almacenId } = req.params;
    const query = `select * from modificar_almacen($1,$2,$3);`;
    const client = new Client(globalDB);
    await client.connect();
    await client.query(
      query,
      [almacenId, nombre, ubicacion],
      async (err, results) => {
        await client.end();
        if (!err) {
          if (results.rows[0].ok) {
            res.status(200).send({
              ok: true,
              mensaje: "datos actualizados corectamente"
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
      }
    );
  } catch (error) {
    res.status(500).send({
      ok: false,
      mensaje: "error en la consulta"
    });
  }
}

async function delAlmacen(req, res) {
  try {
    var { almacenId } = req.params;
    const client = new Client(globalDB);
    const query = `select * from eliminar_almacen($1);`;
    await client.connect();
    await client.query(query, [almacenId], async (err, results) => {
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

module.exports = { getAlmacen, regAlmacen, updAlmacen, delAlmacen };
