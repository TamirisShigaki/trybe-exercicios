import React from 'react';
import PropTypes from 'prop-types';
import './pokemon.css';

class Pokemon extends React.Component {
    render (){
        const { getPokemon } = this.props
        return (
                <div className='flex-container'>
                    <div >
                        <p>{ getPokemon.name }</p>
                        <p>{ getPokemon.type }</p>
                        <p>Average Weight: { getPokemon.averageWeight.value }{ getPokemon.averageWeight.measurementUnit }</p>
                        <button><a href={getPokemon.moreInfo} target="_blank" rel="noreferrer">More Info: {getPokemon.name}</a></button>
                    </div>
                    <img src={ getPokemon.image } alt={`Imagem do: ${getPokemon.name}`} />
                </div>
        )
    }
}

Pokemon.propTypes = {
    getPokemon: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.number,
      }),
      image: PropTypes.string,
    }).isRequired,
  };

export default Pokemon;
