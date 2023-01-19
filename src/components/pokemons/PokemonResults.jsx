import {useContext} from 'react'
import Spinner from '../layout/Spinner'
import PokemonItem from '../pokemons/PokemonItem'
import PokemonContext from '../../context/Pokemon/PokemonContext'

function PokemResults() {
  const {pokemons, loading} = useContext(PokemonContext)

  

  


  if(!loading) {
    return (
      <div className='grid grid-cools-1 gap-8 xl:grid-cols-4 lg:gird-cols-3 md:grid-cols-2'>
        {pokemons.map((pokemon) => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default PokemResults