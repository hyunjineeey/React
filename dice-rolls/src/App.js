import React, { Component } from 'react';
import RollDice from './RollDice.js'
import Die from './Die.js'
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<RollDice />
			</div>
		);
	}
}

export default App;
