import React from 'react';

class Comic  extends React.Component {
  render() {
    console.log(this.props);
    const {comic : {img, alt} }  = this.props;
    return <img src={img} alt={alt} style={{ width: '100%' }} />;
  }
}

export default Comic;
