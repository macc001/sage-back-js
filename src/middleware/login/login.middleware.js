const globalDB = require("../../config/database.config");
const validate = require("../../service/input-info.service");

exports.validarLogin = function(req, res, next) {
  var { id_database, cod_user, passw } = req.body;
  if (id_database) {
    if (cod_user) {
      if (passw) {
        const configDB = globalDB.find(
          fruta => fruta.id === Number(id_database)
        );
        if (configDB === undefined) {
          res.json({
            ok: false,
            messagge: "Base de datos no encontrada"
          });
        } else {
          if (configDB.estado) {
            req.database = configDB;
            /*** VALIDACIONES */
            // const texto = validate.validarNumero(passw);
            // res.json({
            //   ok: passw,
            //   texto
            // });
            /** END VALIDACIONES */
            next();
          } else {
            res.json({
              ok: false,
              messagge: "Base de datos no encontrada"
            });
          }
        }
      } else {
        res.json({
          ok: false,
          campo: "passw",
          messagge: "Complete el campo de contraseña"
        });
      }
    } else {
      res.json({
        ok: false,
        campo: "cod_user",
        messagge: "Complete el campo de usuario"
      });
    }
  } else {
    res.json({
      ok: false,
      campo: "id_database",
      messagge: "Debe seleccionar una base de datos"
    });
  }
};

exports.validarUser = function(req, res, next) {
  var { id_database, cod_user } = req.body;
  if (id_database) {
    if (cod_user) {
      const configDB = globalDB.find(fruta => fruta.id === Number(id_database));
      if (configDB === undefined) {
        res.json({
          ok: false,
          messagge: "Base de datos no encontrada"
        });
      } else {
        if (configDB.estado) {
          req.database = configDB;
          next();
        } else {
          res.json({
            ok: false,
            messagge: "Base de datos no encontrada"
          });
        }
      }
    } else {
      res.json({
        ok: false,
        campo: "cod_user",
        messagge: "Complete el campo de usuario"
      });
    }
  } else {
    res.json({
      ok: false,
      campo: "id_database",
      messagge: "Debe seleccionar una base de datos"
    });
  }
};

exports.validarSalida = function(req, res, next) {
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

exports.validarContra = function(req, res, next) {
  var { id_database, cod_user, passw1, passw2 } = req.body;
  if (id_database) {
    if (cod_user) {
      if (passw1 && passw2) {
        if (passw1 === passw2) {
          const configDB = globalDB.find(
            fruta => fruta.id === Number(id_database)
          );
          if (configDB.estado) {
            req.database = configDB;
            next();
          } else {
            res.json({
              ok: false,
              messagge: "Base de datos no encontradas"
            });
          }
        } else {
          res.json({
            ok: false,
            messagge: "Contraseñas incorrectas"
          });
        }
      } else {
        res.json({
          ok: false,
          campo: "passw1 y passw1",
          messagge: "Debe ingresar contraseñas"
        });
      }
    } else {
      res.json({
        ok: false,
        campo: "cod_user",
        messagge: "Complete el campo de usuario"
      });
    }
  } else {
    res.json({
      ok: false,
      campo: "id_database",
      messagge: "Debe seleccionar una base de datos"
    });
  }
};
