# React props
A basic react project using babel and webpack, made to test the communication between parent and child components.

The app contains a rectangle component (`Rectangle`) whose color can be changed through a sibling controller component (`RectangleManager`).

Both components get their initial color value through their parent (`MyApp` component). We want the color of the `Rectangle` component to change accordingly to the content of `RectangleManager` input.

## Rectangle component
The rectangle component is a simple div of fixed dimension. Its color depends on the `color` props that is passed to him.

```JSX
const Rectangle = React.createClass({
	render() {
		return <div style={{width: "100px", height: "100px", backgroundColor: this.props.color}}></div>
	}
});
```

## Usage
1. `npm install`
2. `npm run build`
3. Open `dist/index.html` in the browser