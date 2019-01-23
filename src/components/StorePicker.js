import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	myInput = React.createRef();

	goToStore = (event) => {
		event.preventDefault();
		
	}
	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h1>Please Enter A Store</h1>
				<input 
					type="text" 
					ref={this.myInput}
					required 
					placeholder="Store Name"
					defaultValue={getFunName()}
					/>
				<button type="submit">Visit Store</button>
			</form>
			);
	}
}

export default StorePicker;