import { getUUID } from "../plugins/get-id.plugin";
import { getAge } from "../plugins/get-age.plugin";
// const { getUUID } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const { getAge, getUUID } = require('../plugins');
interface BuildMakerPersonOptions {
  getUUID: () => string;
  getAge: (birthday: string) => number;
}

interface PersonOptions {
  name: string;
  birthdate: string;
}
export const buildMakePerson = ({
  getUUID,
  getAge,
}: BuildMakerPersonOptions) => {
  return ({ name, birthdate }: PersonOptions) => {
    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};

// const obj = { name: 'John', birthdate: '1985-10-21' };

// const john = buildPerson( obj );

// console.log(john);

/* module.exports = {
  buildMakePerson,
} */
