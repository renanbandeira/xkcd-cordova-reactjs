import React from 'react';
import { getJSON } from '../utils.js';
import InfiniteScroll from 'react-infinite-scroll-component';
import Comic from './Comic.jsx';
import LoadingView from './LoadingView.jsx';

class Comics  extends React.Component {
  state = {
    comics : [],
    hasMore : true,
  }

  loadComics = () => {
    const length = 5;
    const { max } = this.props ? this.props : 0;
    const page = this.state.comics.length / 5;
    [...Array(length)].map((x, i) => {
      const num = max - (page * length) - i;
      if (num > 0) {
        getJSON('http://xkcd.com/' + num + '/info.0.json', this.updateState);
      } else {
        this.setState({
          ...this.state,
          hasMore : false,
        });
      }
    });

  }

  updateState = (status, data = null) => {
    const { comics, hasMore } = this.state;
    this.setState({
      hasMore,
      comics : [
                ...comics,
                data,
            ]
    });
  }

  componentDidMount() {
    this.loadComics();
  }

	mapComics = (comic) => {
    return <Comic key={comic.num} comic={comic} />;
	}

	render() {
		const { comics, hasMore } = this.state;
    if (comics === null) {
      return <div />;
    }
		const container = comics.map(this.mapComics, this);
		return (
      <InfiniteScroll
        next={this.loadComics}
        hasMore={hasMore}
        loader={<LoadingView />}>
          {container}
      </InfiniteScroll>
		);
	}
}

export default Comics;
