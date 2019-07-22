import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = props => {

	const counter = useSelector( (state) => state.counter );
	const dispatch = useDispatch();

    let content = (
      <React.Fragment>
        <h1>Counter: { counter }</h1>
		<button onClick={ (() => dispatch({type: 'INCREMENT'}))}>INCREMENT</button>
		<button onClick={ () => dispatch({type: 'DECREMENT'})}>DECREMENT</button>
      </React.Fragment>
    );

    return content;
  }

export default App;
