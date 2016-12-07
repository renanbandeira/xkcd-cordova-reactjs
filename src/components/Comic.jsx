import React, { PropTypes } from 'react';

class Comic  extends React.Component {
  render() {
    console.log(this.props);
    const {comic : {img} }  = this.props;
    return <img src={img} style={{ width: '100%' }} />;
  }
}

export default Comic;
