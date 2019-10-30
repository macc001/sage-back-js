const jwt = require("jwt-simple"); // falta instalar esto
const dayjs = require("dayjs");

const secret = require("../config/global.config");

exports.ensureAuth = function(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({
      mensaje: "la peticion no tiene cabecera de authorization"
    });
  }
  var token = req.headers.authorization.replace(/['"]+/g, "");
  try {
    var payload = jwt.decode(token, secret.secret_token);
    // console.log(payload.exp + " ---- " + dayjs().unix());
    if (payload.exp <= dayjs().unix()) {
      return res.status(401).send({
        mensaje: "el token ha expirado"
      });
    }
  } catch (error) {
    return res.status(404).send({
      mensaje: "el token no es valido"
    });
  }
  req.id_usuario = payload.aduscodu; // saber qe usuario elimino
  req.id_database = payload.id_database;
  next();
};
