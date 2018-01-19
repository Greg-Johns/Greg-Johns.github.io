import React from 'react'
import Link from 'gatsby-link'
import "../css/styles.css";
import get from 'lodash/get'
import Helmet from 'react-helmet'
import PostCard from '../components/PostCard'
import Footer from '../components/Footer'

const disabledBtn = {
  color: '#999',
  fontSize: '14px',
}

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <header>{get(this, 'props.data.site.siteMetadata.title')}</header>

        {posts.map(post => {
          if (post.node.path !== '/404/') {
            const title = get(post, 'node.frontmatter.title') || post.node.path
            return (
              <PostCard title={title} node={post.node} />
            )
          }
        })}
        <nav>
          <span style={disabledBtn}>~ Older stuff</span> | <Link to='/about/'>About</Link> | <span style={disabledBtn}>Newer stuff ~</span>
        </nav>
        <Footer />
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
