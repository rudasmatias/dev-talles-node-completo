//Función que crea una función, patrones de arquitectura
//const { v4: uuid } = require("uuid");

// const { getAge, getUUID } = require("../plugins");

//const { getUUID } = require("../plugins/get-uuid.plugin");
//const getAge = require("get-age");
//const { getAge } = require("../plugins/get-age.plugin");

const buildMakePerson = ({ getAge, getUUID }) => {
  return ({ name, birthday }) => {
    return {
      id: getUUID(),
      name: name,
      birthday: birthday,
      age: getAge(birthday),
    };
  };
};

/* const obj = {
  name: "Matias",
  birthday: "10-08-1992",
};

const john = buildPerson(obj);

console.log(john);
 */

module.exports = {
  buildMakePerson,
};
