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
          <header className='about'>GREG JOHNS</header>
        </Link>
        <article>

          <figure>
            <img src={me} alt='me' />
            <figcaption>Me on day #1,790</figcaption>
          </figure>

          <p className='intro'>Hello, I’m Greg Johns, a designer, software engineer, 
          tinkerer, hacker, father of two and husband to one. I've kept up a personal 
          website since before blogs where a thing and still enjoy the self hosted, 
          decentralized approach to web-publishing over the social media giants. 
          (Although I still use some of those as well). The thoughts and writing on 
          this site pertain mainly to working and playing with computers, open source 
          ideas, creativity or any other thing I might find interesting enough to blog 
          about.</p>

          <p>As a youngster I was ever the artistic type, always drawing, painting,
          making messes or reading comics books which garnered me a reputation of 
          “art/nerd” type with my schoolmates. After my formal years I went to The 
          Art Institute for a degree in “visual communication” hoping to work as an 
          illustrator/designer for a magazine or marketing agency but the year was 
          1994 and a fellow student introduced me to this Internet and the WWW thing. 
          This was a sea change for me and would set me to seek out a truer self as 
          a “creative/techie/nerd” type.</p>

          <p>A year later I graduated with an art degree and tried the starving artist thing,
          worked as a print designer and side gigged as a assistant inker on an actual 
          published comic book. I saved enough for 
          a <a href='https://en.wikipedia.org/wiki/Macintosh_clone'>Mac clone</a> and 
          continued to follow my interests in web development and interaction 
          design. I would be the guy who try to start the company website for where ever 
          I worked and picked up side jobs designing and building websites for small to 
          mid sized companies around Dallas.</p>

          <h2 style={breakerBreaker}> ~ * ~ </h2>

          <figure className='figless'>
            <img src={spock} alt='spock' />
            <figcaption>Transported</figcaption>
          </figure>

          <p>In 1997 I started work as a designer for Ernst & Young was recognized as someone who 
          could not only work with stakeholders to help realize and design their ideas but also 
          someone who could turn those ideas into something that a web browser understands. 
          As my fascination with computers and programming grew I moved into a more design/prototype
          role and helped projects move faster from idea to wire frame to working prototypes. 
          But being ever curious it was only a matter of time before I worked my way back to the 
          server, database and analytics layer of software development. I've been working in the 
          field of user experience and/or front end/full stack web development.</p>

          <p>Now day’s I work primarily as a front-end/full-stack development contractor for
          various projects and companies. I've build web applications with vanilla.js to Angular
          to React and Polymer and experimented with as much of the front end madness as possible. 
          I’m not partial to any one type of tech stack or framework but as I lean more towards highly 
          scalable, low friction, quickly 
          deployable <a href='https://en.wikipedia.org/wiki/Single-page_application'>SPA</a> or <a href='https://jamstack.org/'>JAMstack</a> architectures 
          with node.js api's on the server.</p>

          <p>I still enjoy he beginning ideation process and working with UX teams to deliver a strong product 
          from start to finnish. I read someone described designing API's as the ultimate in interface 
          design, after following philosophies in design as well as Unix I would agree.
          To learn more about some of my past work see:</p>
          

          <ul className='listLinks'>
            <li>
                <a href='http://www.gregjohns.com/cv'>Resume</a>
            </li>
            <li>
                <Link to='/portfolio/'>Portfolio</Link>
            </li>
            <li>
                <a href='https://'>Pattents</a>
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
