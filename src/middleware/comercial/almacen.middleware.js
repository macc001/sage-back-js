exports.validarRegAlmacen = function(req, res, next) {
  var { nombre, ubicacion } = req.body;
  if (nombre) {
    if (ubicacion) {
      next();
    } else {
      res.status(404).send({
        ok: false,
        messagge: "complete el campo ubicacion"
      });
    }
  } else {
    res.status(404).send({
      ok: false,
      messagge: "complete el campo nombre"
    });
  }
};

exports.validarUpdAlmacen = function(req, res, next) {
  var { nombre, ubicacion } = req.body;
  if (nombre) {
    if (ubicacion) {
      next();
    } else {
      res.status(404).send({
        ok: false,
        messagge: "complete el campo ubicacion"
      });
    }
  } else {
    res.status(404).send({
      ok: false,
      messagge: "complete el campo nombre"
    });
  }
};
