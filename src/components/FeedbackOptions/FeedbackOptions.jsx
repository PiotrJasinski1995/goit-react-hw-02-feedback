import { Component } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styled';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <Styled.FeedbackOptionsListStyled>
        {options.map(option => (
          <li key={option}>
            <button onClick={onLeaveFeedback}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          </li>
        ))}
      </Styled.FeedbackOptionsListStyled>
    );
  }
}

export default FeedbackOptions;
