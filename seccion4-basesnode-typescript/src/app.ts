/* const { getAge, getUUID, buildLogger } = require("./plugins"); */
import { buildLogger } from "./plugins/index";
import { getPokemonNameById } from "./js-foundation/06-promises";

// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const { buildMakePerson } = require('./js-foundation/05-factory')
//const getPokemonById = require("./js-foundation/06-promises");

getPokemonNameById(2)
  .then((pokemon) => console.log({ pokemonName: pokemon }))
  .catch((err) => console.error(err))
  .finally(() => console.log("Finalmente"));

// token de acceso
// Publicas

// ! Referencia a la función factory y uso
// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = { name: 'John', birthdate: '1985-10-21' };

// const john = makePerson( obj );

// console.log({ john });

const logger = buildLogger("app.ts");
logger.log("Hola mundo");
logger.error("Esto es algo malo");

export const name: string = "Ronald Rudas";

console.log(name);
