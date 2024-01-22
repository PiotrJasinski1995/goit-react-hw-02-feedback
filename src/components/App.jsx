import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = event => {
    const buttonText = event.target.innerHTML;

    this.setState({
      [buttonText.toLowerCase()]: this.state[buttonText.toLowerCase()] + 1,
    });
  };

  render() {
    return (
      <div>
        <p>Please leave a feedback</p>
        <button onClick={this.updateFeedback}>Good</button>
        <button onClick={this.updateFeedback}>Neutral</button>
        <button onClick={this.updateFeedback}>Bad</button>
        <p>Statistics</p>
        <ul>
          <li>
            <p>Good: {this.state.good}</p>
          </li>
          <li>
            <p>Neutral: {this.state.neutral}</p>
          </li>
          <li>
            <p>Bad {this.state.bad}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
