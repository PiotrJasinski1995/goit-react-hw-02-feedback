import { Component } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styled';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
  };

  render() {
    return (
      <Styled.FeedbackOptionsListStyled>
        {this.props.options.map(option => (
          <li key={option}>
            <button onClick={this.props.onLeaveFeedback}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          </li>
        ))}
      </Styled.FeedbackOptionsListStyled>
    );
  }
}

export default FeedbackOptions;
