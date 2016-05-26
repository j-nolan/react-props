# React props
A basic react project using babel and webpack, made to test the communication between parent and child components.

The app contains a rectangle component (`Rectangle`) whose color can be changed through a sibling controller component (`RectangleManager`).

Both components get their initial color value through their parent (`MyApp` component). We want the color of the `Rectangle` component to change accordingly to the content of `RectangleManager` input.

## Rectangle component
The `Rectangle` component is a simple div of fixed dimension. Its color depends on the `color` props that is passed to him.

```JSX
const Rectangle = React.createClass({
	render() {
		return <div style={{width: "100px", height: "100px", backgroundColor: this.props.color}}></div>
	}
});
```

## RectangleManager component
The `RectangleManager` component is a simple form containing a single input field. It is stateless: its value depends on the `color` property that is pased to him.

When the user changes the value of the text field, the component communicates the new value to its parent through a callback function, passed as a property.

```JSX
const RectangleManager = React.createClass({
	render() {
		return (
			<form>
				<label>Color:</label>
				<input
					type="text"
					value={this.props.color}
					onChange={this.colorChangeHandler}
				/>
			</form>
		)
	},

	colorChangeHandler(e) {
		const newColor = e.target.value;
		// Communicate new color to parent through the provided callback
		this.props.onChange.call(null, newColor);
	}
});
```

## Usage
1. `npm install`
2. `npm run build`
3. Open `dist/index.html` in the browser