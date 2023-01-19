import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'



function PokemonItem({pokemon : {name, avatar_url}}) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-18 h-18">
              <img src={avatar_url} alt='Profile' />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{name}</h2>
          <Link className="text-base-context text-opacity-40" to={`/pokemon/${name}`}>
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

PokemonItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
}


export default PokemonItem