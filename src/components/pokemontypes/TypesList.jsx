import PropTypes from 'prop-types'
import TypesItem from './TypesItem'
function TypesList({pokemontypes}) {
  //console.log(pokemontypes)
  return (
    <div>
      {pokemontypes.map((mytype) => (
        <TypesItem key={mytype.type.name} mytype={mytype.type.name} />
      ))}
    </div>
  )
}


TypesList.propTypes = {
  pokemontypes: PropTypes.array.isRequired,
}


export default TypesList
