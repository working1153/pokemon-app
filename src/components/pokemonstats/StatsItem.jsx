import PropTypes from 'prop-types'
function StatsItem({pokemonstat}) {
  return (
    <tr>
      <td className='border'>{pokemonstat.stat.name.toUpperCase()}</td>
      <td className='border'>{pokemonstat.base_stat}</td>
    </tr>
  )
}

StatsItem.propTypes = {
  pokemonstat: PropTypes.object.isRequired
}
export default StatsItem