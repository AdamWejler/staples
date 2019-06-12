import React, { Component } from "react"
import Products from "./containers/Products"
import Pagination from "./Pagination"

const simpleFilter = "http://localhost:3005/products?_page="

class App extends Component {

	constructor () {
		super()
		this.state = {
			page: 1,
			filter: simpleFilter+1
		};

		this.updatePage = this.updatePage.bind(this);
	}

	componentDidMount() {
		fetch("http://localhost:3005/db")
		.then(response => response.json())
		.then(data => this.setState( { productsCount: data.products.length } ));
	}

	updatePage(pageNr) {
		this.setState( { 
							page: pageNr,
							filter: simpleFilter+pageNr
						}, 
						console.log(this.state.filter)
		);

	}

	render () {
		return (
			
			<div>
				{this.state && this.state.productsCount && 
					<Pagination page={1} productsCount={this.state.productsCount} updateMethod={this.updatePage} />
				}
				<Products filter={this.state.filter} />
			</div>
			
		)
	}
}

export default App;