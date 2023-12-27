import { httpClientPlugin } from "../plugins";

export const getPokemonNameById = async (
  id: number | number
): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await httpClientPlugin.get(url);

  // const resp = await fetch( url );
  // const pokemon = await resp.json();

  // throw new Error('Pokemon no existe');

  return pokemon.name;

  // return fetch( url )
  //   .then( ( resp ) => resp.json())
  //   // .then( () => { throw new Error('Pokemon no existe') })
  //   .then( ( pokemon ) => pokemon.name );
};
