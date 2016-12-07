import React, { PropTypes } from 'react';
import Comic from './Comic.jsx';

class Comics  extends React.Component {
  state = {
    comics : null,
  }

  getJSON = (url, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    console.log("loading");
    xhr.onload = function() {
      console.log("loaded");
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
  }

  updateState = (status, data = null) => {
    console.log("updating");
    console.log(data);
    this.setState({
      comics : [ data ]
    });
  }

  updateComic = (event) => {
    const num = Math.floor((Math.random() * 1769) + 1);
    this.getJSON('https://crossorigin.me/http://xkcd.com/' + num + '/info.0.json', this.updateState);
  }

  componentDidMount() {
    console.log("mounting");
    this.getJSON('https://crossorigin.me/http://xkcd.com/info.0.json', this.updateState);
  }

	mapComics = (comic) => {
    return <Comic key={comic.num} comic={comic} />;
	}

	render() {
		const { comics } = this.state;
    if (comics === null) {
      return <div />;
    }
		const container = comics.map(this.mapComics, this);
		return (
			<div onClick={this.updateComic}>{container}</div>
		);
	}
}

export default Comics;
