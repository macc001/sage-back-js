exports.validarRegProvedor = function(req, res, next) {
  var { nombre, telefono, email, direccion } = req.body;
  const Subirfoto = req.files;
  if (nombre) {
    if (telefono) {
      if (email) {
        if (direccion) {
          if (!Subirfoto) {
            res.status(200).json({
              mensaje: "Debe de subir una imagen"
            });
          } else {
            if (Subirfoto.foto) {
              next();
            } else {
              res.status(404).send({
                ok: false,
                messagge: "complete el campo foto"
              });
            }
          }
        } else {
          res.status(404).send({
            ok: false,
            messagge: "complete el campo direccion"
          });
        }
      } else {
        res.status(404).send({
          ok: false,
          messagge: "complete el campo email"
        });
      }
    } else {
      res.status(404).send({
        ok: false,
        messagge: "complete el campo telefono"
      });
    }
  } else {
    res.status(404).send({
      ok: false,
      messagge: "complete el campo nombre"
    });
  }
};

exports.validarUpdProvedor = function(req, res, next) {
  var { nombre, telefono, email, direccion } = req.body;
  const Subirfoto = req.files;
  if (nombre) {
    if (telefono) {
      if (email) {
        if (direccion) {
          if (!Subirfoto) {
            res.status(200).json({
              mensaje: "Debe de subir una imagen"
            });
          } else {
            if (Subirfoto.foto) {
              next();
            } else {
              res.status(404).send({
                ok: false,
                messagge: "complete el campo foto"
              });
            }
          }
        } else {
          res.status(404).send({
            ok: false,
            messagge: "complete el campo direccion"
          });
        }
      } else {
        res.status(404).send({
          ok: false,
          messagge: "complete el campo email"
        });
      }
    } else {
      res.status(404).send({
        ok: false,
        messagge: "complete el campo telefono"
      });
    }
  } else {
    res.status(404).send({
      ok: false,
      messagge: "complete el campo nombre"
    });
  }
};
