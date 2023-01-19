import { createContext, useReducer } from "react";
import pokemonReducer from "./PokemonReducer";

const PokemonContext = createContext()

export const PokemonProvider = ({children}) => {
  const initialState = {
    pokemons: [],
    monster: {},
    pokemonstats: [],
    loading: false,
    pokemontypes: [],
  }


  const [state, dispatch] = useReducer(pokemonReducer, initialState)



  return <PokemonContext.Provider value={{
    ...state,
    dispatch,
  }}>
    {children}
  </PokemonContext.Provider>
}


export default PokemonContext