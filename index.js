import React from 'react';
import ReactDOM from 'react-dom';

// L'application possède deux composants : un rectangle (Rectangle) et un formulaire permettant de
// changer l'apparence du rectangle (RectangleManager)
const MyApp = React.createClass({
	render() {
		return (
			<div>
				<Rectangle color={this.state.currentColor} />
				<RectangleMananger color={this.state.currentColor} />
			</div>
		);
	},
	
	getInitialState() {
		return {currentColor: 'red'};
	}
});

// Le rectangle est un simple div de taille fixe, et dont la couleur est donnée par propriété
const Rectangle = React.createClass({
	render() {
		return <div style={{width: "100px", height: "100px", backgroundColor: this.props.color}}></div>
	}
});

// Le formulaire n'a pour l'instant qu'un seul champ, qui permet à l'utilisateur de taper la couleur
// qu'il souhaite donner au rectangle
const RectangleManager = React.createClass({
	render() {
		return (
			<form>
				<input type="text" value={this.props.color} onChange={this.colorChangeHandler} />
			</form>
		)
	},

	colorChangeHandler(e) {
		const newColor = e.target.value;
		// Comment transmettre la nouvelle couleur au parent ?
		// ...
	}
});

ReactDOM.render(<MyApp />, document.getElementById('react-props'));