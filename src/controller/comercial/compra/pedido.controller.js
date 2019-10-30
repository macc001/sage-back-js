const { Client } = require("pg");
const globalDB = require("../../../config/database.config");

async function getPedido(req, res) {
  try {
    var { pedidoId } = req.params;
    const client = new Client(globalDB);
    const query = `select * from getPedidos($1);`;
    await client.connect();
    await client.query(query, [pedidoId], async (err, results) => {
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

async function regPedido(req, res) {
  try {
    var {
      id_producto,
      nombre,
      fechapedido,
      fechaentrega,
      cant,
      preciounidad
    } = req.body;
    const query = `select * from insertar_pedido($1,$2,$3,$4,$5,$6);`;
    const client = new Client(globalDB);
    await client.connect();
    await client.query(
      query,
      [id_producto, nombre, fechapedido, fechaentrega, cant, preciounidad],
      async (err, results) => {
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
      }
    );
  } catch (error) {
    res.status(500).send({
      ok: false,
      mensaje: "error en la consulta"
    });
  }
}

async function updPedido(req, res) {
  try {
    var {
      id_producto,
      nombre,
      fechapedido,
      fechaentrega,
      cant,
      preciounidad
    } = req.body;
    const { pedidoId } = req.params;

    const query = `select * from modificar_pedido($1,$2,$3,$4,$5,$6,$7);`;
    const client = new Client(globalDB);
    await client.connect();
    await client.query(
      query,
      [
        pedidoId,
        id_producto,
        nombre,
        fechapedido,
        fechaentrega,
        cant,
        preciounidad
      ],
      async (err, results) => {
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
      }
    );
  } catch (error) {
    res.status(500).send({
      ok: false,
      mensaje: "error en la consulta"
    });
  }
}

async function delPedido(req, res) {
  try {
    var { pedidoId } = req.params;
    const client = new Client(globalDB);
    const query = `select * from eliminar_pedido($1);`;
    await client.connect();
    await client.query(query, [pedidoId], async (err, results) => {
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

module.exports = { getPedido, regPedido, updPedido, delPedido };
