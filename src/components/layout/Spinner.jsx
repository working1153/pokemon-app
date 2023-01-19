import {CgPokemon} from 'react-icons/cg'
function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="spinner-border animate-spin " role="status">
        <CgPokemon color='#CBD5E1' className='text-6xl'/>
      </div>
    </div>
  )
}

export default Spinner