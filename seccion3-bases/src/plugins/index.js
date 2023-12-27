//Archivo de barril, luego se hace un require a la carpeta directamente

const { getUUID } = require("./get-uuid.plugin");
const { getAge } = require("./get-age.plugin");
const { hhtpClientPlugin } = require("./http-client.plugin");
module.exports = {
  getUUID,
  getAge,
  hhtpClientPlugin,
};
