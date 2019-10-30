const expres = require("express");
const router = expres.Router();

const md_auth = require("../middleware/auth.middleware");
const notific = require("../middleware/notify.middleware");

const notify = require("../controller/notify.controller");

router.post(
  "/notify",
  [md_auth.ensureAuth, notific.validarNotify],
  notify.notificacion
);

module.exports = router;
