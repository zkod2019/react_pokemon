import React, { useState } from "react";
import { PokemonClient } from 'pokenode-ts';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const [pokemonName, setPokemon] = useState([])

  const fetchUserData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/pokemonName")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPokemon(data)
      })
  }

//   const handleSubmit = () => {
//     const client = new PokemonClient();
//     client.getPokemonByName(searchInput)
//     .then(setPokemon(data)
//     .catch((error) => console.error(error));
    
//   };


  return (
    <form onSubmit={fetchUserData}>
  <label>
    Choose Your Pokemon: 
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
  </form>

  <div> <h2>{pokemonName.name}</h2>
        <img src={pokemonName.sprites.front_default} alt={`${pokemonName.name} sprite`} />
        <p>Type: {pokemonName.types.map((type) => type.type.name).join(", ")}</p>
        <p>Height: {pokemonName.height}</p>
        <p>Weight: {pokemonName.weight}</p>
    </div>
  );
};

export default SearchBar;
