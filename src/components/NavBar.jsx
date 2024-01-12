function NavBar({ pokemonIndex, handleNextClick, handlePreviousClick, pokemonLength }) {
    return (
        <div>
            {pokemonIndex > 0 &&
                (<button className="previousBtn" onClick={handlePreviousClick}> Previous </button>)
            }
            {pokemonIndex < pokemonLength - 1 &&
                (<button className="nextBtn" onClick={handleNextClick}> Next </button>)
            }
        </div>
    )
}

export default NavBar