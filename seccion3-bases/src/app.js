/* //Cuando utilizo un require de un archivo directamente lo estoy ejecutando en su totalidad
const templateImported = require("./js-foundation/01-template");

//Realiza un console.log de todo el objeto module, en su formato de objeto como tal
console.log(templateImported);

//Para tomar la variable del emailTemplate deberíamos desestructurarla (podriamos hacerlo al principío directamente)
const { emailTemplate } = templateImported;
console.log(emailTemplate); */

//const { emailTemplate } = require("./js-foundation/01-template");
//console.log(emailTemplate);

/*console.log("Hola Mundo!!"); */

/* require("./js-foundation/02-destructuring");
const { getUserById } = require("./js-foundation/03-callbacks");
const { getUserById2 } = require("./js-foundation/04-arrows"); */

//const id = 1;

/* const { getUUID, getAge } = require("./plugins");
const { buildMakePerson } = require("./js-foundation/05-factory"); */

/* const obj = {
  name: "matias",
  birthday: "10-08-1992",
};

const makePerson = buildMakePerson({ getUUID, getAge });


const matias = makePerson(obj);

console.log({ matias }); */

/* getUserById(id, function (error, user) {
  if (error) {
    throw new Error(error);
  }
  console.log(user);
});

const callback = (error, user) => {
  if (error) throw new Error(error);
  console.log({ data: user });
};

getUserById2(id, callback); */

const getPokemonById = require("./js-foundation/06-promises");

/* getPokemonById(150, (pokemon) => {
  console.log({ pokemon });
}); */

getPokemonById(150)
  .then((pokemon) => console.log({ pokemon }))
  .catch((error) => console.log("Intente nuevamente"))
  .finally(() => console.log("Finalmente"));

//TOKEN DE ACCESO

//PÚBLICAS
