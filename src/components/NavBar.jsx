import React, { useState } from 'react';

function NavBar({ pokemonList }) {
    const [selectedPokemonImg, setSelectedPokemonImg] = useState(null);

    const handlePokemonClick = (pokemon) => {
       setSelectedPokemonImg(pokemon.imgSrc)
    }

    return (
        <div>
            {selectedPokemonImg && (
                <div>
                    <img src={selectedPokemonImg} />
                </div>
            ) 
            }
         
            {pokemonList.map((pokemon) => (
                <button key={pokemon.name} onClick={() => handlePokemonClick(pokemon)}>
                    {pokemon.name}
                </button>
            ))}

        </div>
    );
}

export default NavBar;