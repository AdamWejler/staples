import React, { Component } from "react";
import "./Searcher.css"

class Searcher extends Component {

	constructor(props) {
		super(props);
		this.state = {
			input: ""
		};

		this.runFilter = this.runFilter.bind(this);
	}

	changeInput = event => {
		this.setState({ input: event.target.value } );
	};

	runFilter() {
		this.props.runFilter(this.state.input);
	}

	render() {
		return (
			<div className="mid">
				<input value={this.state.input} onChange={this.changeInput} />
				<button onClick={this.runFilter}>Find</button>
			</div>
		)
	}
}

export default Searcher;