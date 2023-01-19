import { useState, useContext } from 'react'
import PokemonContext from '../../context/Pokemon/PokemonContext'
import AlertContext from '../../context/alert/AlertContext'
import {searchPokemons} from '../../context/Pokemon/PokemonAction'

function PokemonSearch() {
  const [text, setText] = useState('')

  const {pokemons, dispatch} = useContext(PokemonContext)
  const {setAlert} = useContext(AlertContext)

  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(text === '') {
      setAlert('Please enter something', 'error')
    } else {
      dispatch({type: 'SET_LOADING'})
      const pokemons = await searchPokemons(text)
      dispatch({type: 'GET_POKEMONS',payload: pokemons})
      setText('')
    }
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input 
                type="text" 
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type='submit' 
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                Go
              </button>
            </div>
          </div>    
        </form>
      </div>
      {pokemons.length > 0 && (<div>
        <button onClick={() => dispatch({type: 'CLEAR_POKEMONS'})} className="btn btn-ghost btn-lg">
          Clear
        </button>
      </div>)}
    </div>
  )
}

export default PokemonSearch