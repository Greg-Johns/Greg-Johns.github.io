import React from 'react'
import Link from 'gatsby-link'
import '../css/styles.css'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import remoteRendering from './rcr.jpg'
import remoteSketches from './rcs.jpg'
import remoteInteractions from './ri.jpg'
import Footer from '../components/Footer'

const breakerBreaker = {
  clear: 'both'
}

class BlogPortfolio extends React.Component {
  render () {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Link to='/'>
          <header className='portfolio'>GREG JOHNS</header>
        </Link>
        <article>
          <h2>~ Portfolio ~</h2>

          <p className='intro'>I have over two decades of experience innovating in the digital media industries. I have managed and consulted for corporations of all shapes and sizes, developed a variety of pioneering online services, B2B systems, SAAS systems, and hold 11 patents. I've helped small business owners and big CEO's take their idea from the back of napkin or multi-page business requirement document to their online dream. I've worked with stakeholders to shake out ideas, define information spaces, identify design patterns, understand their users, wireframe mockups, prototype, test, iterate, build teams, build processes, build users and realize their next new thing. I even alternate between electric and manual toothbrush every other night because I think it makes my teeth cleaner.</p>

            <p>For those currious about my thoughts and approach to developing software or computers I have a few related blog posts you can read or skip over to my Github, NPM profiles. For those looking for more of the conceptual/design side of software the follows are a few case studies of some of my UI/UX work.</p>

          <h2 style={breakerBreaker}> ~ Case studies comming soon ~ </h2>


          <ul className='listLinks'>
            <li>
              <a href='http://www.gregjohns.com/cv'>Resume</a>
            </li>
            <li>
              <a href='https://patents.google.com/?inventor=Greg+Johns'>Pattents</a>
            </li>
          </ul>
        </article>
        <nav>
          <Link to='/'>~ Back to Index ~</Link>
        </nav>
        <Footer />
      </div>
    )
  }
}

BlogPortfolio.propTypes = {
  route: React.PropTypes.object
}

export default BlogPortfolio
