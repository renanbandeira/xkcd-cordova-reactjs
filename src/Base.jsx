import React from 'react';
import Menu from './Menu.jsx';
import Comics from './components/Comics.jsx';
import { getJSON } from './utils.js';
import LoadingView from './components/LoadingView.jsx';
import OfflineWarning from './components/OfflineWarning.jsx';

class Base extends React.Component {
	state = {
		max : null,
	}

	componentDidMount() {
		getJSON('http://xkcd.com/info.0.json', (status, { num : max}) => {
			console.log(max);
			this.setState({ max});
		});
	}


	render() {
		const {max} = this.state;
		if (max === null) {
			return <LoadingView />;
		}
		return (
			<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
			<Menu />
			<main className="mdl-layout__content">
				<OfflineWarning />
			  <Comics max={max} />
			</main>
		  </div>
		);
	}
}

export default Base;
