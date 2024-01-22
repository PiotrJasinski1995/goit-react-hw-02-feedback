import { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
  };

  render() {
    return (
      <ul>
        {this.props.options.map(option => (
          <li key={option}>
            <button onClick={this.props.onLeaveFeedback}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default FeedbackOptions;
