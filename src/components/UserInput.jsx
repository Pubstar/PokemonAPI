import React, {useState} from 'react'
import axios from 'axios';
import Pokedex from './Pokedex';

const UserInput = (props) => {

  let input;
  const [PokeData, setPokeData] = useState();
  
  function handleSearch(event) {
    if (!input) return;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then((response) => setPokeData(response.data));
    event.preventDefault();
  }

  function handleInput(event) {
    input = event.target.value.toLowerCase();
  }

  return (
    <div>
      <form >
          <input onChange={handleInput} type="text" name="input" id="input" />
          <button id="goButton" onClick={handleSearch}>Go!</button>
      </form>
      <Pokedex data={ PokeData } />
    </div>
  )
}

export default UserInput