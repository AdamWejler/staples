import React, { Component } from "react"
import Products from "./containers/Products"
import Pagination from "./Pagination"
import Modal from "./containers/Modal"

const simpleFilter = "http://localhost:3005/products?_page="

class App extends Component {

	constructor () {
		super()
		this.state = {
			page: 1,
			filter: simpleFilter+1,
			modalActive: false,
		};

		this.updatePage = this.updatePage.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.sendToModal = this.sendToModal.bind(this);
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
						}
		);
	}

	toggleModal() {
		this.setState({ modalActive: !this.state.modalActive });
	}

	sendToModal(details) {
		this.setState({ productDetails: details });
	}

	render () {
		return (
			
			<div>
				{this.state && this.state.productsCount && 
					<Pagination page={1} productsCount={this.state.productsCount} updateMethod={this.updatePage} />
				}
				<Products filter={this.state.filter} openModal={this.toggleModal} sendToModal={this.sendToModal} />

				{ this.state.modalActive ? (
					<Modal closeModal={this.toggleModal} product={this.state.productDetails}/>
				) : null }
			</div>
			
		)
	}
}

export default App;