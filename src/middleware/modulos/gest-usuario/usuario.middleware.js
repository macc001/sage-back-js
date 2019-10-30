const globalDB = require("../../../config/database.config");

exports.validarSexo = function(req, res, next) {
  const configDB = globalDB.find(fruta => fruta.id === Number(req.id_database));
  if (configDB.estado) {
    req.database = configDB;
    next();
  } else {
    res.json({
      ok: false,
      messagge: "Base de datos no encontradas"
    });
  }
};
