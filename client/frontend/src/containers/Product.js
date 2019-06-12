import React, { Component } from "react";

class Product extends Component {

	render() {
		return (
			<div>
				<h3>{this.props.id}</h3>
			</div>
		)
	}
}

export default Product;