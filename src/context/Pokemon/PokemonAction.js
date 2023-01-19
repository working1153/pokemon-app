
import axios from 'axios'

const POKEMON_URL = process.env.REACT_APP_POKEMON_URL

const mypokemon = axios.create({
  baseURL: POKEMON_URL,
  //headers: {Authorization: `token...`}
})

//Get serach results
export const searchPokemons = async (text) => {
  //fetch all pokemon
  //const response = await fetch(`${POKEMON_URL}/pokemon?limit=1279&offset=0`)
  const response = await mypokemon.get(`/pokemon?limit=1279&offset=0`);
  const data = await response.data
 
  //second find text
  const myresult = data.results.filter(element => element.name.includes(text.toLowerCase()));
  //console.log(myresult)
  //it will get my all pokemon object
  const pokemonsDetail = await Promise.all(
    myresult.map(async (pokemon) => {
        const rs = await fetch(pokemon.url)
        const dt = await rs.json()
        return {
            id: dt.id,
            name: dt.name,
            avatar_url: dt.sprites.front_default,
        }
    })
  )
  return pokemonsDetail
}


export const getPokemonAndStatsAndTypes = async(name) => {
  const [pokemon, stats, types] = await Promise.all([
    mypokemon.get(`pokemon/${name}`),
    (await mypokemon.get(`pokemon/${name}`)).data.stats,
    (await mypokemon.get(`pokemon/${name}`)).data.types,
  ])
  
  return {pokemon:pokemon.data, mystats:stats, mytypes:types}
}

