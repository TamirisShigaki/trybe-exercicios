import React from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data';

class Pokedex extends React.Component {
    constructor() {
        super()
        this.state = {
            indexPokemon: 0
        }
        this.allPokemons = this.allPokemons.bind(this)
    }

    allPokemons (size) {
        this.setState((actual, _props) => ({indexPokemon: (actual.indexPokemon +=1) % size}))
    }
    render (){
        return (
            <div>
            <div className='container'>
                {
                    pokemons.map((objPokemon) => 
                    <Pokemon key={ objPokemon.id } getPokemon={ objPokemon }/>
                    )[this.state.indexPokemon]
                }
            </div>
                <button onClick={() => this.allPokemons(pokemons.length)}>All</button>
            </div>
        )
    }
}

export default Pokedex;