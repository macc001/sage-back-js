const expres = require("express");
const router = expres.Router();

const md_auth = require("../../../middleware/auth.middleware");
const md_provedor = require("../../../middleware/comercial/compra/provedor.middleware");

const provedor = require("../../../controller/comercial/compra/provedor.controller");

router.get("/:proveId", provedor.getProvedor);
router.post(
  "/registrar",
  [md_auth.ensureAuth, md_provedor.validarRegProvedor],
  provedor.regProvedor
);
router.put(
  "/actualizar/:proveId",
  [md_auth.ensureAuth, md_provedor.validarUpdProvedor],
  provedor.updProvedor
);
router.delete("/eliminar/:proveId", md_auth.ensureAuth, provedor.delProvedor);

module.exports = router;
