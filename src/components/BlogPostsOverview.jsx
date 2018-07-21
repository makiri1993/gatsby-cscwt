import React from 'react';
import Link from 'gatsby-link';

import * as Styled from '../../StyledComponents';

export default class BlogPostOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Styled.GridContainerBasic numberOfColumns={5} numberOfRows={6}>
        <Styled.GridElementWithSpan
          columnFrom={2}
          columnTo={5}
          rowFrom={2}
          rowTo={3}
        >
          Test
        </Styled.GridElementWithSpan>
      </Styled.GridContainerBasic>
    );
  }
}
