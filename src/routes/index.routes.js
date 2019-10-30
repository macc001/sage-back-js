const express = require("express");
const app = express();

// cargar rutas
var login = require("./login/login.routes");
var usuario = require("./modulos/gest-usuario/usuario.routes");
// var notify = require("./notify.routes");
// var almacen = require("./comercial/almacen.routes");
// var categoria = require("./comercial/categoria.routes");
// var producto = require("./comercial/producto.routes");
// var pedido = require("./comercial/compra/pedido.routes");
// var provedor = require("./comercial/compra/provedor.routes");

app.use("/login", login);
app.use("/usuario", usuario);
// app.use("/notificacion", notify);
// app.use("/almacen", almacen);
// app.use("/categoria", categoria);
// app.use("/producto", producto);
// app.use("/pedido", pedido);
// app.use("/provedor", provedor);

module.exports = app;
