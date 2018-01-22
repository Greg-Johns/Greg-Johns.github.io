import React from 'react'
import Link from 'gatsby-link'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    if (location.pathname === '/' 
        || location.pathname ==='/about/'
        || location.pathname ==='/portfolio/') {
      header = (
        ''
      )
    } else {
      header = (
        <Link className='homeLink' to={'/'}>G</Link>
      )
    }
    return (
      <div className="container">
        {header}
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
