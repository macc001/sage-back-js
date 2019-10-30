const { Client } = require("pg");
const globalDB = require("../../config/database.config");
const imagen = require("../../service/imagen.service");

async function getProducto(req, res) {
  try {
    var { prodId } = req.params;
    const client = new Client(globalDB);
    const query = `select * from getProductos($1);`;
    await client.connect();
    await client.query(query, [prodId], async (err, results) => {
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

async function regProducto(req, res) {
  try {
    res.status(200).send({
      ok: true,
      messagge: "en construccion"
    });
    // var { id_categoria, nombre, costounidad } = req.body;
    // const Subirfoto = req.files;
    // const fot_url = await imagen.subir_foto(Subirfoto);
    // const client = new Client(globalDB);
    // const query = `select * from insertar_producto($1,$2,$3,$4)`;
    // await client.connect();
    // await client.query(
    //   query,
    //   [id_categoria, nombre, fot_url, costounidad],
    //   async (err, results) => {
    //     await client.end();
    //     if (!err) {
    //       if (results.rows[0].ok) {
    //         res.status(200).send({
    //           ok: true,
    //           mensaje: "datos agregados correctamente"
    //         });
    //       } else {
    //         res.status(200).send({
    //           ok: false,
    //           mensaje: "error al agregar datos"
    //         });
    //       }
    //     } else {
    //       res.status(500).send({
    //         ok: false,
    //         mensaje: "error en la peticion",
    //         error: err
    //       });
    //     }
    //   }
    // );
  } catch (error) {
    res.status(500).send({
      ok: false,
      mensaje: "error en la consulta"
    });
  }
}

async function updProducto(req, res) {
  try {
    res.status(200).send({
      ok: true,
      messagge: "en construccion"
    });
    // const { prodId } = req.params;
    // var { id_categoria, nombre, costounidad } = req.body;
    // const Subirfoto = req.files;
    // const fot_url = await imagen.subir_foto(Subirfoto);
    // const client = new Client(globalDB);
    // const query = `select * from insertar_producto($1,$2,$3,$4)`;
    // await client.connect();
    // await client.query(
    //   query,
    //   [id_categoria, nombre, fot_url, costounidad],
    //   async (err, results) => {
    //     await client.end();
    //     if (!err) {
    //       if (results.rows[0].ok) {
    //         res.status(200).send({
    //           ok: true,
    //           mensaje: "datos agregados correctamente"
    //         });
    //       } else {
    //         res.status(200).send({
    //           ok: false,
    //           mensaje: "error al agregar datos"
    //         });
    //       }
    //     } else {
    //       res.status(500).send({
    //         ok: false,
    //         mensaje: "error en la peticion",
    //         error: err
    //       });
    //     }
    //   }
    // );
  } catch (error) {
    res.status(500).send({
      ok: false,
      mensaje: "error en la consulta"
    });
  }
}

async function delProducto(req, res) {
  try {
    var { prodId } = req.params;
    const client = new Client(globalDB);
    const query = `select * from eliminar_producto($1)`;
    await client.connect();
    await client.query(query, [prodId], async (err, results) => {
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

module.exports = { getProducto, regProducto, updProducto, delProducto };
