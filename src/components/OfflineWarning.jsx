import React from 'react';

class OfflineWarning  extends React.Component {
  state = {
    isOnline : false,
  }

  onOnline = () => {
    console.log("online");
    this.setState({isOnline: true});
  }

  onOffline = () => {
    console.log("offline");
    this.setState({isOnline: false});
  }

  componentDidMount() {
    document.addEventListener("online", this.onOnline, false);
    document.addEventListener("offline", this.onOffline, false);
    const isOnline = navigator.connection.type !== 'none';
    this.setState({isOnline});
  }

  render() {
    const {isOnline} = this.state;
    if (isOnline) {
      return <div></div>;
    }

    return (
      <span className="mdl-chip" style={{position:'fixed',bottom:'0px', left: '50%'}}>
        <span className="mdl-chip__text">Você está offline</span>
      </span>
    );
  }
}

export default OfflineWarning;
