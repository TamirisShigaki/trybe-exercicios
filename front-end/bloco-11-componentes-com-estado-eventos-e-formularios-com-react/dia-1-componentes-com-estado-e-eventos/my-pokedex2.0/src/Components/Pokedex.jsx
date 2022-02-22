import React from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data';

class Pokedex extends React.Component {
    constructor(){
        super()
        this.state = {
            indexPokemon: 0,
            pokemonType: 'all'
        }

        this.nextPokemon = this.nextPokemon.bind(this)
        this.listPokemon = this.listPokemon.bind(this)
        this.filterPokemon = this.filterPokemon.bind(this)
        this.typePokemon = this.typePokemon.bind(this)
    }

    nextPokemon () {
       this.setState((atual, _props) => ({
            indexPokemon: (atual.indexPokemon +=1) % this.listPokemon().length,
        }))
    }

    listPokemon () {
        return pokemons.filter((filtraObjeto) => this.state.pokemonType !== 'all' ? filtraObjeto.type === this.state.pokemonType : filtraObjeto).map((objeto) => <Pokemon key={objeto.id} getPokemon={ objeto} />)
    }

    filterPokemon (event) {
        this.setState((atual, _props) => ({
            pokemonType: atual.pokemonType = event.target.value,
            indexPokemon: atual.indexPokemon = 0
        }))
    }

    typePokemon () {
        return [...new Set(pokemons.map(({ type }) => type))]
    }

    render(){
        return(
            <div className='conteiner-all'>
                <section className='container'>
                    {this.listPokemon()[this.state.indexPokemon]}
                </section>
                <button onClick={this.filterPokemon} value="all" className='all' >All</button>
                    {this.typePokemon().map((type) => {
                        return <button key={type} onClick={this.filterPokemon} value={type} className={type} >{type}</button>
                    })}
                    <br />
                    <button onClick={this.nextPokemon}  disabled={this.listPokemon().length <= 1} className='next' >Next Pokemon</button>
            </div>
        )
    }
}

export default Pokedex;