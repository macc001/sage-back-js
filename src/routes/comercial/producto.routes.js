const expres = require("express");
const router = expres.Router();

const md_auth = require("../../middleware/auth.middleware");
const md_producto = require("../../middleware/comercial/producto.middleware");

const producto = require("../../controller/comercial/producto.controller");

router.get("/:prodId", producto.getProducto);
router.post(
  "/registrar",
  [md_auth.ensureAuth, md_producto.validarRegProducto],
  producto.regProducto
);
router.put(
  "/actualizar/:prodId",
  [md_auth.ensureAuth, md_producto.validarUpdProducto],
  producto.updProducto
);
router.delete("/eliminar/:prodId", md_auth.ensureAuth, producto.delProducto);

module.exports = router;
