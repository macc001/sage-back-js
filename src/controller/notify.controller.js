const { Client } = require("pg");
const globalDB = require("../config/database.config");

async function notificacion(req, res) {
  try {
    var { de, mensaje } = req.body;
    console.log(de, mensaje);
    const client = new Client(globalDB);
    await client.connect();
    await client.query("LISTEN accounts_changed");
    await client.on("notification", msg => {
      console.log(msg.channel);
      console.log(msg.payload);
      console.log(msg);
    });
    res.status(200).json({
      ok: true,
      mensjae: "notificaciones activccadas corectamentes"
    });
  } catch (error) {
    res.status(500).send({
      ok: false,
      mensaje: "error en la consulta"
    });
  }
}
module.exports = { notificacion };
