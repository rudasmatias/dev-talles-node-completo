const getAgePlugin = require("get-age");

const getAge = (birthday) => {
  if (!birthday) return new Error("birthday is required");
  //return getAgePlugin(birthday);
  return "hola cambie el archivo donde utilizo la dependencia, cambio patrón adaptador";
};

module.exports = {
  getAge,
};
