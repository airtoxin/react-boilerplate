var React = require( 'react' );

var Header = React.createClass( {
	displayName: 'Header',
	propTypes: {
		text: React.PropTypes.string,
		onClickHeader: React.PropTypes.func
	},
	render: function () {
		return (
			<div onClick={this.props.onClickHeader}>
				{this.props.text}
			</div>
		);
	}
} );

module.exports = Header;
