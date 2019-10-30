const expres = require("express");
const router = expres.Router();

const md_auth = require("../../middleware/auth.middleware");
const md_alamacen = require("../../middleware/comercial/almacen.middleware");

const almacen = require("../../controller/comercial/almacen.controller");

router.get("/:almacenId", almacen.getAlmacen);
router.post(
  "/registrar",
  [md_auth.ensureAuth, md_alamacen.validarRegAlmacen],
  almacen.regAlmacen
);
router.put(
  "/actualizar/:almacenId",
  [md_auth.ensureAuth, md_alamacen.validarUpdAlmacen],
  almacen.updAlmacen
);
router.delete("/eliminar/:almacenId", md_auth.ensureAuth, almacen.delAlmacen);

module.exports = router;
