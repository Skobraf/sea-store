import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
	render() {
		return (
			<div className="inventory">
				<AddFishForm />
			</div>
			);
	}
}

export default Inventory;