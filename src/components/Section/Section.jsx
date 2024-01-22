import { Component } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styled';

class Section extends Component {
  static defaultProps = {
    title: '',
  };

  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
      <Styled.SectionStyled>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </Styled.SectionStyled>
    );
  }
}

export default Section;
