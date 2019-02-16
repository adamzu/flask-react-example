import React from 'react';

class Header extends React.Component {

  _getNumberOfTimes(numberOfTimes) {
    if (numberOfTimes === 1) {
      return '1 time!'
    }
    return numberOfTimes + ' times!';
  }

  render() {
    return (
      <h2>
        You have {this.props.action} {this._getNumberOfTimes(this.props.count)}
      </h2>
    );
  }
}
export default Header;
