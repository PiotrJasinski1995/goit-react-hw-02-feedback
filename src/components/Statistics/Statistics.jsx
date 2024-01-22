import { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };

  render() {
    return (
      <ul>
        <li>
          <p>Good: {this.props.good}</p>
        </li>
        <li>
          <p>Neutral: {this.props.neutral}</p>
        </li>
        <li>
          <p>Bad: {this.props.bad}</p>
        </li>
        <li>
          <p>Total: {this.props.total}</p>
        </li>
        <li>
          <p>Positive feedback: {this.props.positivePercentage}%</p>
        </li>
      </ul>
    );
  }
}

export default Statistics;
