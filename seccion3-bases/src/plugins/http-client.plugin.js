const axios = require("axios");

//Patrón adaptador que envuelve el fetchapi

const hhtpClientPlugin = {
  get: async (url) => {
    //CON FETCHAPI DE NODE
    /*     const res = await fetch(url);
    return await res.json(); */

    //CON AXIOS
    const { data } = await axios(url);
    return data;
  },
  post: async (url, body) => {},
  put: async (url, body) => {},
  delete: async (url) => {},
};

/* const buildHttpClient = (headers) => {
  return hhtpClientPlugin;
};
 */
module.exports = {
  hhtpClientPlugin,
};
