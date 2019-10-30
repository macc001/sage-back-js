const expres = require("express");
const router = expres.Router();

const md_auth = require("../../../middleware/auth.middleware");
const md_pedido = require("../../../middleware/comercial/compra/pedido.middleware");

const pedido = require("../../../controller/comercial/compra/pedido.controller");

router.get("/:pedidoId", pedido.getPedido);
router.post(
  "/registrar",
  [md_auth.ensureAuth, md_pedido.validarRegPedido],
  pedido.regPedido
);
router.put(
  "/actualizar/:pedidoId",
  [md_auth.ensureAuth, md_pedido.validarUpdPedido],
  pedido.updPedido
);
router.delete("/eliminar/:pedidoId", md_auth.ensureAuth, pedido.delPedido);

module.exports = router;
