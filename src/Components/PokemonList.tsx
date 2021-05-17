import './PokemonList.css'
import { useEffect, useState } from "react";
import {Species} from "../model/pokemon-model";
import {fetchAllPokemon} from "../service/PokemonApiService"

function PokemonList(){
  const [pokemons, setPokemons] = useState<Species[]>([]);
  useEffect(()=>{
    fetchAllPokemon().then(data=>{
      setPokemons(data);
    });
  }, []);



  return (
    <div>
    <h2>Pokemon List</h2>
    { pokemons.length == 0 ?
      <p>Loading data...</p> :
      <ol>
        {/* As usual, render array using .map */}
        {pokemons.map((pokemon, i) => 
          <li key={i}>{pokemon.name}</li>
        )}
      </ol> }
  </div>
  );
}

export default PokemonList;