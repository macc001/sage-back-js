exports.validarRegCategoria = function(req, res, next) {
  var { nombre } = req.body;
  if (nombre) {
    next();
  } else {
    res.status(404).send({
      ok: false,
      messagge: "complete el campo nombre"
    });
  }
};

exports.validarUpdCategoria = function(req, res, next) {
  var { nombre } = req.body;
  if (nombre) {
    next();
  } else {
    res.status(404).send({
      ok: false,
      messagge: "complete el campo nombre"
    });
  }
};
