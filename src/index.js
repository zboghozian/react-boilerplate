import React,{Component} from 'react';
import {render} from 'react-dom';

class App extends Component {
	render() {
		return <div>Hello {this.props.name}.</div>
	}
}

render(<App name="world" />,document.getElementById('container'));
