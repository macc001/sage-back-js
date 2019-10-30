const { Client } = require("pg");
const globalDB = require("../config/database.config");
const globalCloudinary = require("../config/global.config");
var uniqid = require("uniqid");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

async function actualizar_foto(req, res) {
  var path = `./src/uploads/users/${nombreArchivo}`;
  archivo.mv(path, err => {
    if (err) {
      res.status(200).send({
        err
      });
    } else {
      // eliminarFotoNube(req, res, path);
      subirFotoNube(path);
    }
  });
}

async function eliminarFotoServidor(req, res, path) {}

async function subirFotoNube(path) {
  // cloudinary.config(globalCloudinary.config_cloudinary);
  cloudinary.config({
    cloud_name: "devdreams",
    api_key: "561147125936816",
    api_secret: "4PDUjMlhL5R1kZ8qKE0Z1-PUP-o"
  });
  var img = await cloudinary.uploader.upload(path);
  // var img = await cloudinary.uploader.rename(path, "colegio/usuario", function(
  //   error,
  //   result
  // ) {
  //   console.log(result, error);
  // });
  console.log(img);
}

async function eliminarFotoNube(req, res) {
  // cloudinary.config(globalCloudinary.config_cloudinary);
  var { id_foto } = req.body;
  cloudinary.config({
    cloud_name: "devdreams",
    api_key: "561147125936816",
    api_secret: "4PDUjMlhL5R1kZ8qKE0Z1-PUP-o"
  });
  // var img = await cloudinary.uploader.upload(path);
  // console.log(img);
  const result = await cloudinary.uploader.destroy(id_foto);
  console.log(result);
  return res.status(200).json({
    result,
    mensaje: "eliminado correctamente"
  });
}

module.exports = {
  actualizar_foto,
  eliminarFotoNube
};
