const expres = require("express");
const router = expres.Router();

const md_auth = require("../../middleware/auth.middleware");
const md_categoria = require("../../middleware/comercial/categoria.middleware");

const categoria = require("../../controller/comercial/categoria.controller");

router.get("/:categId", categoria.getCategoria);
router.post(
  "/registrar",
  [md_auth.ensureAuth, md_categoria.validarRegCategoria],
  categoria.regCategoria
);
router.put(
  "/actualizar/:categId",
  [md_auth.ensureAuth, md_categoria.validarUpdCategoria],
  categoria.updCategoria
);
router.delete("/eliminar/:categId", md_auth.ensureAuth, categoria.delCategoria);

module.exports = router;
