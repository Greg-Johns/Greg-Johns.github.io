import React from 'react'
import Link from 'gatsby-link'
import '../css/styles.css'
import get from 'lodash/get'
import me from './me.png'
import spock from './spock.jpg'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'

const breakerBreaker = {
  clear: 'both'
}

class BlogAbout extends React.Component {
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

          <p className='intro'>I have over two decades of experience innovating in the digital media industries. I have managed and consulted for corporations of all shapes and sizes, developed a variety of pioneering online services, B2B systems, SAAS systems, and hold over X patents. I've helped small business owners to big CEO's take their idea from the back of napkin or multi-page BRD to their online dream. I've worked with stakeholders to shake out ideas, define information spaces, identify design patterns, understanding users, wireframe mockups, prototype, test, iterate, iterate, iterate, build teams, build processes, build users and realize their next new thing. I even alternate between electric and manual tooth brush every other night because I think it makes my teeth cleaner.</p> 
  
          <p>For those currious about my thoughts and approach to developing software or computers I have a few related blog posts you can read or skip over to my Github, NPM profiles. For those looking for more of the conceptual/design side of software what follows are a few case studdies of some of my UI/UX work.</p>
   
          <h2 style={breakerBreaker}> ~ * ~ </h2>

          <ul className='listLinks'>
            <li>
                - Lanvera customer client document managment concept (blog post)
            </li>
            <li>
                - Avaya QPT (blog post)
            </li>
            <li>
                - Avaya Scopiafy concept/proto (blog post)
            </li>
            <li>
                - FedEx IA and concept wires (blog post)
            </li>
            <li>
                - Supermarket data concept (blog post)
            </li>
            <li>
                - Verizon FiOS Interaction design and prototypes
                        MultiLevelImgSearch (blog post)
                        TimeWinder (blog link)
                        FiOS concept & early prototype work
                        FiOS V.X
                        Remote UX
            </li>
            <li>
                - Widget work (WizProgBar, CSSFramed, DashboardDefault, BookmarBlog)
            </li>
            <li>
                Old site & logo sliders
            </li>
          </ul>
        
          <p>If your just looking for my work resume you can view a print friendly, html resume online viersion or because some people still like to download, attach to emails, print out and fill away I also provide a handy button to Download Resume</p>
        

          <ul className='listLinks'>
            <li>
                <a href='http://www.gregjohns.com/cv'>Online Resume</a>
            </li>
            <li>
                <a href='https://'>Download Resume</a>
            </li>
            <li>
                <a href='https://'>List of pattents</a>
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

BlogAbout.propTypes = {
  route: React.PropTypes.object
}

export default BlogAbout

export const aboutQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
