import React from 'react';
import * as Styled from '../../StyledComponents';

const BlogTile = ({ tileItems }) => (
  //   <Styled.GridContainerBasic numberOfColumns={2} numberOfRows={2}>
  <Styled.RelativeContainer>
    <Styled.BlogTileImage />
    <Styled.BlogTileInfoBox>Test 2</Styled.BlogTileInfoBox>
    <Styled.BlogTileText>Bla bla fnjvndfjlcbdljkfvmc sdjfvndfuivbnfg</Styled.BlogTileText>
  </Styled.RelativeContainer>
  //   </Styled.GridContainerBasic>
);

export default BlogTile;
