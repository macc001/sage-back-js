exports.converMayPrimeLetra = function(cadena) {
  //   console.log(
  //     pass.replace(
  //       /(^|[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ])(?:([a-záéíóúüñ])|([A-ZÁÉÍÓÚÜÑ]))|([A-ZÁÉÍÓÚÜÑ]+)/gu,
  //       c => c.toUpperCase()
  //     )
  //   );
  return cadena
    .toLowerCase()
    .trim()
    .split(" ")
    .map(v => v[0].toUpperCase() + v.substr(1))
    .join(" ");
};

exports.validarPass = function(pass) {
  if (pass < 5) {
    var payload = { ok: false, messagge: "almenos 5 caracteres" };
    return payload;
  } else {
    var payload = { ok: true, messagge: "almenos 5 caracteres" };
    return payload;
  }
};

exports.validarNumero = function(numero) {
  //   var num = numero;
  //   console.log(parseInt(num * 10, 10) / 10);
  //   const nu = Number.parseFloat(numero).toFixed(3);
  //   console.log(nu);
  //   return nu;
};

exports.validarContra = function(pass) {
  // console.log(pass < 5);
  // console.log(pass.length);
  // console.log(Number(pass));
  // const nu = Number(pass);
  // const nu = [{ pass }, { pass }];
  // console.log(typeof nu);

  // EXPRESCIONES REGULARES
  // var re = /ab+c/;
  // var er2 = re.test(pass);
  // var cade = pass.toLowerCase();
  // console.log(cade);
  // console.log(er2);
  if (pass < 5) {
    return "cadena menos que 1";
  } else {
    return "cadena ok";
  }
};
