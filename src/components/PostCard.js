import React from 'react'
import Link from 'gatsby-link'

class Card extends React.Component {
  render () {
    return (
       <Link to={this.props.node.frontmatter.path} >
         <section>
           <h3>{this.props.title}</h3>
           <time>{this.props.node.frontmatter.date}</time>
           <p dangerouslySetInnerHTML={{ __html: this.props.node.excerpt }} />
         </section>
       </Link>
    )
  }
}

export default Card
