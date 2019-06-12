import React, { Component } from "react";
import Product from "./Product"

class Products extends Component {

	constructor(props) {
		super(props);
		this.state = {
			products: [],
		}
	}

	componentDidMount() {
		fetch(this.props.filter)
		.then(response => response.json())
		.then(data => this.setState( { products: data } ))
	}

	render() {
		return (
			<div>
				{this.state.products.map(elem =>
		            <Product key={elem.id} id={elem.id} />
		        )}
			</div>
		)
	}

}


export default Products;