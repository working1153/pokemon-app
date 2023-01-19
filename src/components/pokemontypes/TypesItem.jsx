import PropTypes from 'prop-types'

function TypesItem({mytype}) {
  return (
    <div className={`ml-2 mr-1 badge badge-${mytype}`}>{mytype}</div>
  )
}
TypesItem.propTypes = {
  mytype : PropTypes.string.isRequired,
}
export default TypesItem



