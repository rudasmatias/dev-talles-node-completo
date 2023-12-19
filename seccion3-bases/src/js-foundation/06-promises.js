// const getPokemonById = (id, callback) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//   fetch(url)
//     //información de la respuesta,no la data
//     //Cuando se resuelven promesas consecutivamente, aparece la promise hell
//     .then(
//       (res) => res.json() /* .then((data) => callback && callback(data.name)) */
//     )
//     .then((data) =>
//       /* callback && callback(data.name) */ console.log(data.name)
//     )
//     .catch((error) => console.log(error));
// };

/* const getPokemonById = (id, callback) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => callback(data.name));
}; */

//sin callbacks
/* const getPokemonById = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.name);
};
 */

/* const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();

  return pokemon.name;
}; */
const { hhtpClientPlugin } = require("../plugins");
const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = await hhtpClientPlugin.get(url);

  return pokemon.name;
};

module.exports = getPokemonById;
