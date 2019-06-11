import React, { Component } from "react";

class Products extends Component {

	constructor(props) {
		super(props);
		this.state = {
			products: [],
		}
	};

	componentDidMount() {

		fetch(this.props.filter)
		.then(response => response.json())
		.then(data => this.setState( { products: data } ))
		
	}

	render() {
		return (
			<div>
				{this.state.products.map(elem =>
		          <li key={elem.id}>
		            <h1>{elem.id}</h1>
		          </li>
		        )}
			</div>
		)
	}

}


export default Products;