import React from 'react'
import './pokemon.css'

class Pokemon extends React.Component {
    render (){
        const { getPokemon } = this.props
        return (
                <div className='flex-container'>
                    <div >
                        <p>{ getPokemon.name }</p>
                        <p>{ getPokemon.type }</p>
                        <p>Average Weight: { getPokemon.averageWeight.value }{ getPokemon.averageWeight.measurementUnit }</p>
                        <button><a href={getPokemon.moreInfo} target="_blank">More Info: {getPokemon.name}</a></button>
                    </div>
                    <img src={ getPokemon.image } alt={`Imagem do: ${getPokemon.name}`} />
                </div>
        )
    }
}

export default Pokemon;
