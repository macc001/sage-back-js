const { io } = require("../index");

io.on("connection", client => {
  console.log("usuario conectado");

  client.on("disconnect", () => {
    console.log("usuario desconectado");
  });
});
