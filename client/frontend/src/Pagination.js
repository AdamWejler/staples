import React, { Component } from "react";
import "./Pagination.css"

class Pagination extends Component {

	constructor(props) {
		super(props);
		this.state = {
			page: this.props.page,
			pagesCount: 0,
		};

		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.updatePage = this.updatePage.bind(this);
		this.first = this.first.bind(this);
		this.last = this.last.bind(this);
		this.updatePagesCount = this.updatePagesCount.bind(this);
	}

	next() {
		if ( this.state.page + 1 <= this.state.pagesCount ) {
			this.setState( 
				{ page: this.state.page+1 },
				this.updatePage
			);
		}
	}

	previous() {
		if( this.state.page >= 2 ) {
			this.setState(
				{ page: this.state.page-1 },
				this.updatePage
			);
		}
	}

	first() {
		this.setState({ page: 1 }, this.updatePage);
	}

	last() {
		this.setState({ page: this.state.pagesCount }, this.updatePage);
	}

	updatePage() {
		this.props.updateMethod(this.state.page);
	}

	componentDidMount() {
		this.updatePagesCount();
	}

	updatePagesCount() {
		let additionalPage = (this.props.productsCount%10 > 0) ? 1 : 0;
		let pagesCount = Math.floor(this.props.productsCount/10 + additionalPage);
		this.setState( {pagesCount: pagesCount} );
	}

	componentWillReceiveProps(newProps) {
		const oldProps = this.props;
		if(oldProps.productsCount !== newProps.productsCount) {
			this.setState({ productsCount: newProps.productsCount }, () => { this.updatePagesCount() } );
		}
	}

	render() {
		return (
			<div className="center">
				<button onClick={this.first}>&lt;&lt;</button>
				<button onClick={this.previous}>&lt;</button>
				{this.state.page} / {this.state.pagesCount}
				<button onClick={this.next}>&gt;</button>
				<button onClick={this.last}>&gt;&gt;</button>
			</div>
		)
	}
}

export default Pagination;