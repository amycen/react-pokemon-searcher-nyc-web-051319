import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'
import { STATUS_CODES } from 'http';

class PokemonCollection extends React.Component {


  getHP = (stats) => {
    return stats.find((stat) => stat.name === 'hp').value
  }

  createPokemonCards = () => {
    return this.props.pokemons.map(pokemon => <PokemonCard key={pokemon.id} name={pokemon.name} frontImg={pokemon.sprites.front} backImg={pokemon.sprites.back} hp={this.getHP(pokemon.stats)}/>)
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
         {this.props.pokemons ? this.createPokemonCards() : null} 
      </Card.Group>
    )
  }
}

export default PokemonCollection
