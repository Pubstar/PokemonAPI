import React from 'react'
import pokedex from '../pokedex.jpg';

const Pokedex = (props) => {
    return (
    <div className='pokedex-container'>
        <img className="pokedex-img" src={pokedex} alt="Pokedex" />
        <div className='pokemon-container'>
            {props.data && <img className='pokemon-img' src={ props.data.sprites.front_default } alt="Pokemon" /> }
        </div>
    </div>
  )
}

export default Pokedex