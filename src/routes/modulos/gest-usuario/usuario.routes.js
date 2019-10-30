const expres = require("express");
const router = expres.Router();

const md_auth = require("../../../middleware/auth.middleware");
const md_usuario = require("../../../middleware/modulos/gest-usuario/usuario.middleware");

const usuario = require("../../../controller/modulos/gest-usuario/usuario.controller");

router.get(
  "/mostrar-sexo",
  [md_auth.ensureAuth, md_usuario.validarSexo],
  usuario.mostrarSexo
);

module.exports = router;
