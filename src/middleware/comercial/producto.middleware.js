exports.validarRegProducto = function(req, res, next) {
  var { id_categoria, nombre, costounidad } = req.body;
  const Subirfoto = req.files;
  if (id_categoria) {
    if (nombre) {
      if (costounidad) {
        if (!Subirfoto) {
          res.status(200).json({
            mensaje: "Debe de subir una imagen"
          });
        } else {
          if (Subirfoto.imagen) {
            next();
          } else {
            res.status(404).send({
              ok: false,
              messagge: "complete el campo imagen"
            });
          }
        }
      } else {
        res.status(404).send({
          ok: false,
          messagge: "complete el campo costounidad"
        });
      }
    } else {
      res.status(404).send({
        ok: false,
        messagge: "complete el campo nombre"
      });
    }
  } else {
    res.status(404).send({
      ok: false,
      messagge: "complete el campo id_categoria"
    });
  }
};

exports.validarUpdProducto = function(req, res, next) {
  var { id_categoria, nombre, costounidad } = req.body;
  const Subirfoto = req.files;
  if (id_categoria) {
    if (nombre) {
      if (costounidad) {
        if (!Subirfoto) {
          res.status(200).json({
            mensaje: "Debe de subir una imagen"
          });
        } else {
          if (Subirfoto.imagen) {
            next();
          } else {
            res.status(404).send({
              ok: false,
              messagge: "complete el campo imagen"
            });
          }
        }
      } else {
        res.status(404).send({
          ok: false,
          messagge: "complete el campo costounidad"
        });
      }
    } else {
      res.status(404).send({
        ok: false,
        messagge: "complete el campo nombre"
      });
    }
  } else {
    res.status(404).send({
      ok: false,
      messagge: "complete el campo id_categoria"
    });
  }
};
