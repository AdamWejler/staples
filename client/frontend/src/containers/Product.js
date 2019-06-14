import React, { Component } from "react";
import "./Product.css"

class Product extends Component {

	render() {
		return (
			<div className="horizontal-center">
				<div className="row">
					<img src={this.props.details.images.primary.large} alt="Product" width="80" height="60" />
				</div>
				<div className="row">
					<div className="vertical-center">
						<div>Product name: {this.props.details.general.name}</div>
						<div>Product code: {this.props.details.id}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Product;