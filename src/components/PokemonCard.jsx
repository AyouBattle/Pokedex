import PropTypes from "prop-types";

function PokemonCard({imgSrc,name}) {
    return (
      <figure>
        {imgSrc ? (
          <img src={imgSrc} alt={name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{name}</figcaption>
      </figure>
    );
  }

  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }).isRequired,
  };
  

  
  

    export default PokemonCard;