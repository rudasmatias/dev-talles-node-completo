//Archivo de barril, luego se hace un require a la carpeta directamente

const { getUUID } = require("../plugins/get-uuid.plugin");
const { getAge } = require("../plugins/get-age.plugin");
const { hhtpClientPlugin } = require("../plugins/http-client.plugin");
module.exports = {
  getUUID,
  getAge,
  hhtpClientPlugin,
};
