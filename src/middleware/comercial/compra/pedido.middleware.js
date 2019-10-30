exports.validarRegPedido = function(req, res, next) {
  var {
    id_producto,
    nombre,
    fechapedido,
    fechaentrega,
    cant,
    preciounidad
  } = req.body;
  if (id_producto) {
    if (nombre) {
      if (fechapedido) {
        if (fechaentrega) {
          if (cant) {
            if (preciounidad) {
              next();
            } else {
              res.status(404).send({
                ok: false,
                messagge: "complete el campo preciounidad"
              });
            }
          } else {
            res.status(404).send({
              ok: false,
              messagge: "complete el campo cant"
            });
          }
        } else {
          res.status(404).send({
            ok: false,
            messagge: "complete el campo fechaentrega"
          });
        }
      } else {
        res.status(404).send({
          ok: false,
          messagge: "complete el campo fechapedido"
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
      messagge: "complete el campo id_producto"
    });
  }
};

exports.validarUpdPedido = function(req, res, next) {
  var {
    id_producto,
    nombre,
    fechapedido,
    fechaentrega,
    cant,
    preciounidad
  } = req.body;
  if (id_producto) {
    if (nombre) {
      if (fechapedido) {
        if (fechaentrega) {
          if (cant) {
            if (preciounidad) {
              next();
            } else {
              res.status(404).send({
                ok: false,
                messagge: "complete el campo preciounidad"
              });
            }
          } else {
            res.status(404).send({
              ok: false,
              messagge: "complete el campo cant"
            });
          }
        } else {
          res.status(404).send({
            ok: false,
            messagge: "complete el campo fechaentrega"
          });
        }
      } else {
        res.status(404).send({
          ok: false,
          messagge: "complete el campo fechapedido"
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
      messagge: "complete el campo id_producto"
    });
  }
};
