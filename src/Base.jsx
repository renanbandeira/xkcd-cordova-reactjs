import React, { PropTypes } from 'react';
import Menu from './Menu.jsx';
import Comics from './components/Comics.jsx';

class Base extends React.Component {

	render() {
		return (
			<div className="mdl-layout mdl-layout--fixed-header">
			<Menu />
			<main className="mdl-layout__content">
			  <Comics />
			</main>
		  </div>
		);
	}
}

export default Base;
