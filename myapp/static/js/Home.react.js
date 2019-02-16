import NumberOfClicksIndicator from 'NumberOfClicksIndicator.react';
import React from 'react';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.onClickMeClick = this.onClickMeClick.bind(this);
    this.onResetClick = this.onResetClick.bind(this);
    this.state = {
      numberOfClickMeClicks: 0,
      numberOfResetClicks: 0,
    };
  }

  onClickMeClick() {
    this.setState({
      numberOfClickMeClicks: this.state.numberOfClickMeClicks + 1,
    });
  }

  onResetClick() {
    this.setState({
      numberOfClickMeClicks: 0,
      numberOfResetClicks: this.state.numberOfResetClicks + 1,
    });
  }

  render() {
    return (
      <div>
        <div className="title">
          <span className="title-text">Welcome to my app!</span>
        </div>
        <NumberOfClicksIndicator
          buttonName='Click me!'
          numberOfClicks={this.state.numberOfClickMeClicks}
        />
        <NumberOfClicksIndicator
          buttonName='Reset'
          numberOfClicks={this.state.numberOfResetClicks}
        />
        <button onClick={this.onClickMeClick}>Click me!</button>
        <button onClick={this.onResetClick}>Reset</button>
      </div>
    );
  }
}
export default Home;
