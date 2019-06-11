import React, { Component } from "react"
import Products from "./containers/Products"

class App extends Component {

	constructor () {
		super()
		this.state = {
			filter: "http://localhost:3005/products"
		}
	}

	render () {
		return (
			<Products filter={this.state.filter} />
		)
	}
}

export default App;