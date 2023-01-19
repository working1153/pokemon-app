const pokemonReducer = (state, action) => {
  switch(action.type) {
    case 'GET_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
      }
    case 'GET_POKEMON_AND_STATS_AND_TYPES':
      return {
        ...state,
        monster: action.payload.pokemon,
        pokemonstats: action.payload.mystats,
        pokemontypes: action.payload.mytypes,
        loading: false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'CLEAR_POKEMONS':
      return {
        ...state,
        pokemons: [],
      }
    default:
      return state
  }
}

export default pokemonReducer