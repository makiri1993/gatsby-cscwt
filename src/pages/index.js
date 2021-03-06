import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Hero from '../components/Hero';
import Filler from '../components/Filler';
import Tanzania from '../components/Tanzania';
import BlogPostOverview from '../components/BlogPostsOverview';
import './style.css';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="content">
        <Hero />
        <Filler />
        <Tanzania />
        <BlogPostOverview />
        
      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
