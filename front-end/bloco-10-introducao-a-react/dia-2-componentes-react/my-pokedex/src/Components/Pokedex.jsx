import React from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data';

class Pokedex extends React.Component {
    render (){
        return (
            <div className='container'>
                {
                    pokemons.map((objPokemon) => 
                    <Pokemon key={ objPokemon.id } getPokemon={ objPokemon }/>
                    )
                }
            </div>
        )
    }
}

export default Pokedex;