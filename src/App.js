// create your App component here
import React, { Component } from 'react'
 export default class App extends Component {
   state = {
      people: []
  }
   componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(({peopleJson}) => this.setState({ people: peopleJson }))
   }
   render() {
    return (
      <div>
        {this.state.people.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    )
  }
 }