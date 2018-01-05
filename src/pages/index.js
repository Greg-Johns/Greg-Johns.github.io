import React from 'react'
import Link from 'gatsby-link'
import "../css/styles.css";
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'

const disabledBtn = {
  color: '#999',
  fontSize: 'smaller'
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
              <Link to={post.node.frontmatter.path} >
                <section>
                  <h3>{post.node.frontmatter.title}</h3>
                  <time>{post.node.frontmatter.date}</time>
                  <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                </section>
              </Link>
            )
          }
        })}
        <nav>
          <a style={disabledBtn}>~ Older Stuff</a> | <Link to='/about/'>About</Link> | <a style={disabledBtn}>Newer Stuff ~</a>
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
