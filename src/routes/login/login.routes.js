const expres = require("express");
const router = expres.Router();

const md_auth = require("../../middleware/auth.middleware");
const md_login = require("../../middleware/login/login.middleware");

const login = require("../../controller/login/login.controller");
const database = require("../../controller/login/database.login");

router.post("/database", database.leerDatabase);
router.post("/ingresar", md_login.validarLogin, login.login);
router.post("/validar-user", md_login.validarUser, login.validar_user);
router.post(
  "/salir",
  [md_auth.ensureAuth, md_login.validarSalida],
  login.salir
);
router.post(
  "/registrar-passw",
  [md_login.validarContra],
  login.registrar_contra
);
router.post("/reset-contra", md_login.validarUser, login.reset_contra);
router.post("/renovartoken", login.renovartoken);

module.exports = router;
