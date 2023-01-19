import PropTypes from 'prop-types'
import StatsItem from './StatsItem'
function StatsList({pokemonstats}) {
  return (
    <div>
        <table className="table border-collapse border">
          <tbody>
            {pokemonstats.map((mystat) => (
              <StatsItem key={mystat.stat.name} pokemonstat={mystat} />
            ))}
          </tbody>
        </table>
    </div>
  )
}

StatsList.propTypes = {
  pokemonstats: PropTypes.array.isRequired,
}

export default StatsList