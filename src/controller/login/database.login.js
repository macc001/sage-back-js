const globalDB = require("../../config/database.config");

// leer archivo json
// const json_database = fs.readFileSync("src/config/database.json", "utf-8");
// let globalDB = JSON.parse(json_database);

async function leerDatabase(req, res) {
  try {
    let cant = globalDB.length;
    var newDatabase = [];
    for (let index = 0; index < cant; index++) {
      const element = globalDB[index].estado;
      if (element) {
        newDatabase.push({
          id: globalDB[index].id,
          nombre: globalDB[index].nombre
        });
      }
    }
    res.status(200).send({
      ok: true,
      newDatabase
    });
  } catch (error) {
    res.status(500).send({
      ok: false,
      messagge: "error, consulta con el administrador",
      error
    });
  }
}

module.exports = { leerDatabase };
