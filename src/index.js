const expres = require("express");

const socketIO = require("socket.io");
const http = require("http");

const app = expres();
let server = http.createServer(app);

var cors = require("cors");
var fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

app.set("port", process.env.PORT || 5000);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//middlewares
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors({ origin: true, credentials: true }));

app.use(require("./routes/index.routes"));

module.exports.io = socketIO(server);
require("./socket/socket.socket");

server.listen(app.get("port"), () => {
  // console.log("servidor en el puerto: ", app.get("port"));
});
