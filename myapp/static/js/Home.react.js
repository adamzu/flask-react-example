import NumberOfTimesIndicator from 'NumberOfTimesIndicator.react';
import React from 'react';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onReset = this.onReset.bind(this);
    this.state = {
      count: 0,
      numberOfResets: 0,
    };
  }

  onClick() {
    this.setState({count: this.state.count + 1});
  }

  onReset() {
    this.setState({
      count: 0,
      numberOfResets: this.state.numberOfResets + 1,
    });
  }

  getNumberOfTimes(numberOfTimes) {
    if (numberOfTimes === 1) {
      return '1 time!'
    }
    return numberOfTimes + ' times!';
  }

  render() {
    return (
      <div>
        <div className="title">
          <span className="title-text">Welcome to my app!</span>
        </div>
        <NumberOfTimesIndicator
          action='clicked the "Click me!" button'
          count={this.state.count}
        />
        <NumberOfTimesIndicator
          action='reset'
          count={this.state.numberOfResets}
        />
        <button onClick={this.onClick}>Click me!</button>
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}
export default Home;
