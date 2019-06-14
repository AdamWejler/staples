import React, { Component } from "react";
import Product from "./Product"

class Products extends Component {

	constructor(props) {
		super(props);
		this.state = {
			products: [],
			filter: this.props.filter
		}

		this.updateFilter = this.updateFilter.bind(this);
	}

	updateFilter() {
		fetch(this.state.filter)
		.then(response => response.json())
		.then(data => this.setState( { products: data } ))
	}

	componentDidMount() {
		this.updateFilter();
	}

	componentWillReceiveProps(newProps) {
		const oldProps = this.props;
		if(oldProps.filter !== newProps.filter) {
			this.setState({ filter: newProps.filter }, () => { this.updateFilter() } );
		}
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