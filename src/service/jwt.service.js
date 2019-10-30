const jwt = require("jwt-simple");
const dayjs = require("dayjs");

const secret = require("../config/global.config");

exports.createToken = function(user, id_database) {
  var payload = {
    id_database,
    aduscodu: user.aduscodu,
    adusnomb: user.adusnomb,
    adusemai: user.adusemai,
    adustelf: user.adustelf,
    adustelm: user.adustelm,
    adussexo: user.adussexo,
    iat: dayjs().unix(),
    exp: dayjs()
      .add(1, "days")
      .unix()
  };
  return jwt.encode(payload, secret.secret_token);
};
