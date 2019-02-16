import React from 'react';

class NumberOfTimesIndicator extends React.Component {

  _getNumberOfTimes(numberOfTimes) {
    if (numberOfTimes === 1) {
      return '1 time!'
    }
    return numberOfTimes + ' times!';
  }

  render() {
    return (
      <div className="number-of-times-indicator">
        <span>
          You have {this.props.action} {this._getNumberOfTimes(this.props.count)}
        </span>
      </div>
    );
  }
}
export default NumberOfTimesIndicator;
