import { Component } from 'react';
import * as Styled from './styled';

class MainHeading extends Component {
  render() {
    return (
      <Styled.MainHeadingStyled>{this.props.children}</Styled.MainHeadingStyled>
    );
  }
}

export default MainHeading;
