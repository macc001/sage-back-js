const globalCloudinary = require("../config/global.config");
var uniqid = require("uniqid");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

exports.subir_foto = async function(subir) {
  var archivo = subir.foto;
  var nombreCortado = archivo.name.split(".");
  var extensionArchivo = nombreCortado.pop().toLowerCase();
  var extensionesValidas = ["png", "jpg", "gif", "jpeg"];
  if (extensionesValidas.indexOf(extensionArchivo) < 0) {
    var datos = {
      ok: false,
      mensaje: "Extension no válida",
      errors: {
        mensaje: "extensiones válidas son " + extensionesValidas.join(", ")
      }
    };
    return datos;
  }
  var nombreArchivo = `${nombreCortado[0]}-${uniqid()}.${extensionArchivo}`;
  var path1 = `./src/uploads/${nombreArchivo}`;
  return new Promise(function(resolve) {
    archivo.mv(path1, async err => {
      if (err) {
        res.status(500).send({
          err
        });
      } else {
        var fot = await subirFotoNube(path1, nombreArchivo);
        // console.log(fot);
        var result = {
          id: fot.public_id,
          url: fot.secure_url
        };
        resolve(result.url);
      }
    });
  });
};

async function subirFotoNube(path1, nombreArchivo) {
  cloudinary.config(globalCloudinary.config_cloudinary);
  var img = await cloudinary.uploader.upload(path1);
  const pathimg = await path.resolve(__dirname, `../uploads/${nombreArchivo}`);
  await fs.unlinkSync(pathimg);
  return img;
}
