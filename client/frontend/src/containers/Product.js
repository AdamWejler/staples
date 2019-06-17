import React, { Component } from "react";
import "./Product.css"

class Product extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		};

		this.sendToModal = this.sendToModal.bind(this);
	}

	sendToModal() {
		this.props.openModal();
		this.props.sendToModal(this.props.details);
	}

	render() {
		return (
			<div className="horizontal-center" onClick={ this.sendToModal }>
				<div className="row">
					<img src={this.props.details.images.primary.large} alt="Product" width="80" height="60" />
				</div>
				<div className="row">
					<div className="vertical-center">
						<div className="name">{this.props.details.general.name}</div>
						<div>Product code: {this.props.details.id} </div>
					</div>
				</div>
			</div>
		)
	}
}

export default Product;