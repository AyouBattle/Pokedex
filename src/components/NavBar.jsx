import React, { useState } from 'react';

function NavBar({ pokemonList }) {
    const [selectedPokemonImg, setSelectedPokemonImg] = useState(null);

    const handlePokemonClick = (pokemon) => {
<<<<<<< Updated upstream
       setSelectedPokemonImg(pokemon.imgSrc)
=======
        {pokemon.imgSrc ?
             (setSelectedPokemonImg(pokemon.imgSrc)) : (setSelectedPokemonImg("???"))
        }
       
    //    if (pokemon.name === "pikachu"){
    //     alert("Pika pikachu")
    //  }

    
>>>>>>> Stashed changes
    }

    return (
        <div>
            {selectedPokemonImg === "???" ? 
            ((<p>???</p>)
                
            ) : (<div>
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