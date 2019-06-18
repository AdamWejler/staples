import React, { Component } from "react"
import Products from "./containers/Products"
import Pagination from "./Pagination"
import Modal from "./containers/Modal"
import Searcher from "./containers/Searcher"

const simpleFilter = "http://localhost:3005/products?_page="

class App extends Component {

	constructor () {
		super()
		this.state = {
			page: 1,
			filter: simpleFilter+1,
			modalActive: false,
			sought: "",
		};

		this.updatePage = this.updatePage.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.sendToModal = this.sendToModal.bind(this);
		this.runFilter = this.runFilter.bind(this);
	}

	componentDidMount() {
		fetch("http://localhost:3005/db")
		.then(response => response.json())
		.then(data => this.setState( { productsCount: data.products.length } ));
	}

	updatePage(pageNr) {
		this.setState( { 
							page: pageNr,
							filter: simpleFilter+pageNr+"&general.name_like="+this.state.sought
						}
		);
	}

	toggleModal() {
		this.setState({ modalActive: !this.state.modalActive });
	}

	sendToModal(details) {
		this.setState({ productDetails: details });
	}

	runFilter(sought) {
		fetch("http://localhost:3005/products?general.name_like="+sought).then(response => {
			this.setState({ 
				productsCount: response.headers.get("X-Total-Count"),
				sought: sought
			}, () => { this.updatePage(1) })
		})

	}

	render () {
		return (
			
			<div>
				<Searcher runFilter={this.runFilter} />

				{this.state && this.state.productsCount && 
					<Pagination page={this.state.page} productsCount={this.state.productsCount} updateMethod={this.updatePage} />
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