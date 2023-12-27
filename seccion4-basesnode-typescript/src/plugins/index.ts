//Archivo de barril

// const { getUUID } = require("../plugins/get-id.plugin");
// const { getAge } = require("../plugins/get-age.plugin");
// const { http } = require("../plugins/http-client.plugin");
// const { buildLogger } = require("../plugins/logger.plugin.ts");

// module.exports = {
//   getAge,
//   getUUID,
//   http,
//   buildLogger,
// };

export { getAge } from "./get-age.plugin";
export { getUUID } from "./get-id.plugin";
export { httpClientPlugin } from "./http-client.plugin";
export { buildLogger } from "./logger.plugin";
