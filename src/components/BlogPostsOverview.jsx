import React from 'react';
import Link from 'gatsby-link';
import BlogTile from './BlogTile';
import * as Styled from '../../StyledComponents';

export default class BlogPostOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogTiles: [
        {
          image: 'http://lorempixel.com/1280/960/',
          category: 'News',
          text:
            '1 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
        },
        {
          image: 'http://lorempixel.com/1280/960/',
          category: 'News',
          text:
            '2 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
        },
        {
          image: 'http://lorempixel.com/1280/960/',
          category: 'News',
          text:
            '3 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
        },
        {
          image: 'http://lorempixel.com/1280/960/',
          category: 'News',
          text:
            '4 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
        },
        {
          image: 'http://lorempixel.com/1280/960/',
          category: 'News',
          text:
            '5 Lorem ipsum dolor sit , consetetur sadipscing , sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
        },
        {
          image: 'http://lorempixel.com/1280/960/',
          category: 'News',
          text:
            '6 Lorem tr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
        },
        {
          image: 'http://lorempixel.com/1280/960/',
          category: 'News',
          text:
            '7 Lorem ipsumonsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
        },
        {
          image: 'http://lorempixel.com/1280/960/',
          category: 'News',
          text:
            '8 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy  tempor invidunt ut labore et dolore magna aliquyam'
        },
        {
          image: 'http://lorempixel.com/1280/960/',
          category: 'News',
          text: '9 Lorem ipsum dolor sit amet, labore et dolore magna aliquyam'
        },
        {
          image: 'http://lorempixel.com/1280/960/',
          category: 'News',
          text:
            '10 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
        }
      ]
    };
  }

  handleScroll = () => {
      console.log("bin onscroll event")
    // + is unary operator, same as Number(window.scrollY)
    const scrollPositionY = +window.scrollY
    return this.setState({ scrollPositionY })
  }
  renderBlogTile(startBlog, startRow) {
    console.log(this.state.blogTiles);
    let renderedBlogTiles = [];
    for (let i = 0; i < 3; i++) {
      const el = this.state.blogTiles[startBlog];
      startBlog++;
      console.log(i + ' Column ' + startRow + ' Row');
      const blogTile = (
        <Styled.GridElementCentered gridColumn={i + 2} gridRow={startRow + 1}>
          <Styled.BlogTileInfoBox>{el.category}</Styled.BlogTileInfoBox>
          <Styled.BlogTileImage image={el.image} />
          <Styled.BlogTileText>{el.text}</Styled.BlogTileText>
        </Styled.GridElementCentered>
      );
      renderedBlogTiles.push(blogTile);
    }
    return renderedBlogTiles;
  }
  render() {
    const firstRowBlogTiles = this.renderBlogTile(0, 1);
    const secondRowBlogTiles = this.renderBlogTile(3, 2);
    const thirdRowBlogTiles = this.renderBlogTile(6, 3);

    return (
      <Styled.GridContainerBasicWithCustomizedColumns>
        <Styled.GridElementWithSpan
          columnFrom={2}
          columnTo={5}
          rowFrom={1}
          rowTo={2}
        >
          <Styled.TextWithHorizontalLine>
            Blog Overview
          </Styled.TextWithHorizontalLine>
        </Styled.GridElementWithSpan>
        {firstRowBlogTiles}
        {secondRowBlogTiles}
        {thirdRowBlogTiles}
      </Styled.GridContainerBasicWithCustomizedColumns>
    );
  }
}
