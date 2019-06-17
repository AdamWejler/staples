import React, { Component } from "react";
import "./Modal.css"

class Modal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		};

		this.close = this.close.bind(this);
	}

	close() {
		this.props.closeModal();
	}

	render() {
		return (
			<div className="modal">
				<div className="frame">
					<div className="rightTop">
						<img 
							onClick={this.close}
							src="https://img.icons8.com/flat_round/64/000000/delete-sign.png"
							alt="Close"
							height="42"
							width="42"
						/>
					</div>

					<div className="content">

						<div>
							<div className="nextTo">
								<img src={this.props.product.images.primary.large} alt="Product" width="200" height="180" />
							</div>
							<div className="nextTo">
								<div>
									<div className="productDetails"><b>{this.props.product.general.name}</b></div>
									<div className="productDetails">Brand: {this.props.product.brand.name} </div>
									<div className="productDetails">Product code: {this.props.product.id} </div>
								</div>
							</div>
						</div>

						<div className="description" dangerouslySetInnerHTML={{ __html: this.props.product.general.description }}></div>

					</div>
				</div>
			</div>
		)
	}
}

export default Modal;