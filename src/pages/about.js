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
          <header>GREG JOHNS</header>
        </Link>
        <article>
          <h2>~ About ~</h2>

          <figure>
            <img src={me} alt='me' />
            <figcaption>Me on day #1,790</figcaption>
          </figure>

          <p>Hello and thanks for stopping by my site.</p>

          <p>I’m Greg Johns, a designer, software engineer, tinkerer, hacker, father
          of two and husband to one. I have kept up this personal website since before
          they were called blogs and still enjoy the self hosted, decentralized approach
					to web-publishing over the social media giants. (Although I still use some of those as well)

					The thoughts and writing on this site pertain mainly to working and playing
					with computers, open source ideas, creativity or any other thing I might find
					interesting enough to blog about.</p>

          <p>As a youngster I was ever the artistic type, always drawing, painting,
          making something or reading comics  and sci-fi books which garnered me a
          reputation of “art/nerd” type with my schoolmates. After my formal years I
          went to The Art Institute for a degree in “visual communication” hoping to
          work as an illustrator/designer for a magazine or marketing agency but the
          year was 1994 and a fellow student introduced me to this internet and the
          WWW thing. This was a sea change for me and would set me to seek out a truer
          self as a “creative/techie/nerd” type.</p>

          <h2 style={breakerBreaker}> ~ * ~ </h2>

          <figure className='figless'>
            <img src={spock} alt='spock' />
            <figcaption>Transported</figcaption>
          </figure>

          <p>Since then I have been working, originally as a UI/UX designer who helped
          small companies get their first website up and running to large telecoms and
          banks looking for ways to infuse the “creative” types with the “techie” types
          in their companies to get the most out of their web development efforts. As
          my fasinaction with computers grew I moved into a more designer/prototyping
          role and helped projects move more quickly from initial idea to visual wireframes
          to working front end prototypes. But being ever curious it was only a matter of
          time before I worked my way back to the server, database and analytics layer of
          software development.</p>

          <p>Nowday’s I work primarily as a front-end/full-stack development contractor for
          various projects and companies. I’m not patial to any one type of development or
          framework but mainly work in a JAMstack to getting ideas to the screen. Feel free
          to contact me with any work oportunities you might have or for a more formal
          history please see my checkout any of the links below.</p>

          <div className='btnLinks'>
            <a href='http://www.gregjohns.com/cv'>Resume</a>
            <a href='http://twitter.com/greg_johns'>Twitter</a>
            <a href='https://www.behance.net/gregjohns'>Behance</a>
            <a href='https://www.linkedin.com/in/gajohns/'>LinkedIn</a>
            <a href='https://github.com/Greg-Johns'>Github</a>
            <a href='https://codepen.io/Gajit'>CodePen</a>
          </div>
        </article>
        <nav>
          <Link to='/'>~ Index ~</Link>
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
