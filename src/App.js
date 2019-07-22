import React, { useState } from 'react';
import CharPicker from './Components/CharPicker';
import Character from './Components/Character';

const App = props => {

  const [chosenSide, setChosenSide] = useState('light');
  const [selectedCharacter, setSelectedCharacter] = useState(1);
  const [destroyed, setDestroyed] = useState(false);

  const selectedCharHandler = (e) => {
    const charId = e.target.value;
    setSelectedCharacter(charId)
  }

  const sideHandler = side => {
    setChosenSide(side);
  }

  const destructionHandler = () => {
    setDestroyed(true);
  };

    let content = (
      <React.Fragment>
        <CharPicker 
          selectedChar = { selectedCharacter }
          side = { chosenSide }
          onCharSelect = { selectedCharHandler }
        />
        <Character selectedChar = { selectedCharacter } />
        <button onClick={ sideHandler.bind(null, 'light') }> Light Side </button>
        <button onClick={ sideHandler.bind(null, 'dark') }>Dark Side</button>
        {chosenSide === 'dark' && (
          <button onClick={ destructionHandler}>DESTROY!</button>
        )}
      </React.Fragment>
    );
    if (destroyed) {
      content = <h1>Total destruction!</h1>;
    }
    return content;
  }

export default App;
