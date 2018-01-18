import React from 'react';

const StarWarsTile = (props) => {
  return(
    <div id="content-div">
      <p className="template">Name: {props.character_name}</p>
      <p className="template">Height: {props.character_height}</p>
      <p className="template">Mass: {props.character_mass}</p>
      <p className="template">Hair Color: {props.character_hair_color}</p>
      <p className="template">Skin Color: {props.character_skin_color}</p>
      <p className="template">Eye Color: {props.character_eye_color}</p>

    </div>
  )
}

export default StarWarsTile;
