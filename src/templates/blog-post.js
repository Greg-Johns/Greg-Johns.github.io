import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Footer from '../components/Footer'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <article className='mainGrid'>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h2 className='postHeader'>~ {post.frontmatter.title} ~</h2>
        <time>
          <span>{post.frontmatter.date}</span>
        </time>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Footer />
      </article>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
