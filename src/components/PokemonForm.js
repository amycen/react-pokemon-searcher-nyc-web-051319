import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  convertPokemon = () => {
    return {
      height: null,
      weight: null,
      abilities: [],
      moves: [],
      name: this.state.name,
      stats: [
        {
          "value": this.state.hp,
          "name": "hp"
        },
        {
          "value": null,
          "name": "special-defense"
        },
        {
          "value": null,
          "name": "special-attack"
        },
        {
          "value": null,
          "name": "defense"
        },
        {
          "value": null,
          "name": "attack"
        },
        {
          "value": null,
          "name": "speed"
        }
      ],
      "types": [],
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
     fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.convertPokemon())
    })
    .then(resp => resp.json())
    .then(() => {this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })})
    .then(()=>this.props.getPokemons(""))
  
  } 
  

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange} value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} value={this.state.frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl"onChange={this.handleChange} value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
