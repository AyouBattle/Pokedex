import PokemonCard from "./components/PokemonCard"; 
import "./App.css"
import { useState } from "react";

function App(){
  const [pokemonIndex, setpokemonIndex] = useState(0);
  console.log(useState)
  const handleNextClick = ()=>{
    setpokemonIndex(pokemonIndex + 1)
  }
  
  const handlePreviousClick = ()=>{
    setpokemonIndex(pokemonIndex - 1)
  }


  let pokemon = pokemonList[pokemonIndex];
  return(
  <>
    <PokemonCard pokemon={pokemon} />
    {pokemonIndex > 0 && 
    (<button className="previousBtn" onClick={handlePreviousClick}> Previous </button>)
    }
    {pokemonIndex < pokemonList.length - 1 &&
    (<button className="nextBtn" onClick={handleNextClick}> Next </button>)
    }

  </>
  
  );
}

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

export default App; 