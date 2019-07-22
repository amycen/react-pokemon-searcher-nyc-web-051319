import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: []
  }

  getPokemons = (searchString) => {
    fetch(`http://localhost:3000/pokemon`)
    .then(resp => resp.json())
    .then(pokemons => searchString ? pokemons.filter(pokemon => pokemon.name.includes(searchString)) : pokemons) 
    .then(filteredPokemons => {
      this.setState({
        pokemons: filteredPokemons
      })
    })
  }

  componentWillMount() {
    this.getPokemons()
  }

  handleSearch = (e) => {
    this.getPokemons(e.target.value.toLowerCase())
  }
  
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearch} showNoResults={this.state.pokemons.length ? false : true}/> 
        <br />
        <PokemonCollection pokemons={this.state.pokemons}/>
        <br />
        <PokemonForm getPokemons={this.getPokemons}/>
      </div>
    )
  }
}

export default PokemonPage
