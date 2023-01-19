
import {useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import PokemonContext from '../context/Pokemon/PokemonContext'
import {Link} from 'react-router-dom'
import Spinner from '../components/layout/Spinner'
import StatsList from '../components/pokemonstats/StatsList'
import TypesList from '../components/pokemontypes/TypesList'
import {getPokemonAndStatsAndTypes} from '../context/Pokemon/PokemonAction'

function Monster() {
  const { monster, loading, pokemonstats, pokemontypes, dispatch } = useContext(PokemonContext)

  const params = useParams()

  useEffect(() => {
    dispatch({ type:'SET_LOADING' })
    const getPokemonData = async () => {
      const pokemonData = await getPokemonAndStatsAndTypes(params.name)
      dispatch({ type:'GET_POKEMON_AND_STATS_AND_TYPES', payload:pokemonData })
    } 
    getPokemonData()
  }, [dispatch, params.name])

  const {
    name,
    sprites,
  } = monster

  
  
//get my deep object
  let avatar = ''


  if(sprites) { //確保sprites存在 如果要拿monster.sprites底下的東西必須要先這樣
    avatar = sprites.other['official-artwork'];
  }

  if(loading) { 
    return <Spinner />
  }
  const wiki = process.env.REACT_APP_POKEMON_WIKI_URL+'/'+name
  
  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to='/' className='btn btn-ghost'>
            Back To Search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card ">
              <figure>
                <img src={avatar.front_default} alt=''/>
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <TypesList pokemontypes={pokemontypes} />
              </h1>
              <div>
                <StatsList pokemonstats={pokemonstats} />
              </div>
              <div className='mt-4 card-actions'>
                <a
                  href={wiki}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-outline'
                >
                  Visit Pokemon wiki
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Monster