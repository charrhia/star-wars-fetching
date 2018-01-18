import React, { Component } from 'react';

import StarWarsTile from './StarWarsTile';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    }
    this.getStarWarsObject = this.getStarWarsObject.bind(this);
  }


  

  getStarWarsObject() {
    fetch(`https://swapi.co/api/people/2/`)
    .then(response => {
      if (response.ok) {
        return response;
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({content: body})
    })
  }





  render() {


    let handleClick = () => {
      this.getStarWarsObject();
    }


    return(
      <div id="main-page">
        <h1>Star Wars Fetching</h1>


        <StarWarsTile
          character_name={this.state.content.name}
          character_height={this.state.content.height}
          character_mass={this.state.content.mass}
          character_hair_color={this.state.content.hair_color}
          character_skin_color={this.state.content.skin_color}
          character_eye_color={this.state.content.eye_color}
        />



        <div id="btn">

          <button onClick={handleClick}>Call Robot</button>
        </div>




      </div>






  );
}}

export default App;
