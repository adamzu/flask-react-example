import React from 'react';

class NumberOfClicksIndicator extends React.Component {

  _getTimesText(numberOfClicks) {
    if (numberOfClicks === 1) {
      return 'time!'
    }
    return 'times!';
  }

  render() {
    return (
      <div className="number-of-times-indicator">
        <span>
          You have clicked the "{this.props.buttonName}" button
          {' ' + this.props.numberOfClicks + ' '}
          {this._getTimesText(this.props.numberOfClicks)}
        </span>
      </div>
    );
  }
}
export default NumberOfClicksIndicator;
