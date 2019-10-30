const { Pool } = require("pg");

async function mostrarSexo(req, res) {
  try {
    const adamcodm = 90;
    const adamtipa = 5;
    const client = new Pool(req.database);
    const queryy = "select * from administracion.mostrar_sexo($1,$2);";
    const results = await client.query(queryy, [adamcodm, adamtipa]);
    await client.end();
    if (results.rowCount > 0) {
      res.status(200).json({
        ok: true,
        messagge: "datos extraidos exitosamente",
        datos: results.rows
      });
    } else {
      res.json({
        ok: false,
        messagge: "no existen datos"
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

module.exports = {
  mostrarSexo
};
