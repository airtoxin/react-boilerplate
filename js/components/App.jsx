var React = require( 'react' );

var Header = require( './Header.jsx' );

var App = React.createClass( {
	displayName: 'App',
	getInitialState: function () {
		return {
			headerText: 'Click Me!'
		};
	},
	onClickHeader: function () {
		this.setState( {
			headerText: this.state.headerText + this.state.headerText
		} );
	},
	render: function () {
		return (
			<div>
				<Header
					text={this.state.headerText}
					onClickHeader={this.onClickHeader}
				/>
			</div>
		);
	}
} );

module.exports = App;
