import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="About"
        keywords={[
          `about`,
          `kenyon college`,
          `studio art`,
          `seniors`,
          `virtual gallery`,
        ]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          {/*<h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Clean, minimal, and deeply customisable. London is a theme made for
            people who appreciate simple lines.
          </h2>*/}
          <figure
            className="kg-card kg-image-card"
            style={{ marginTop: "-4%", marginBottom: "50px" }}
          >
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>
              Not Present: Francis Byrne, Alec Clothier, Daniela Grande, Maddie
              Lockyer
            </figcaption>
          </figure>
          <h3>welcome</h3>
          <p>
            We are the Studio Art majors of the{" "}
            <a href="https://kenyon.edu/"
              target="_blank"
              rel="noopener noreferrer">
              Kenyon College
            </a>{" "}
            Class of 2020. We are so grateful to our professors, peers, and
            friends for their support and for sharing these wonderful past four
            years with us.
          </p>
          <p>
            This site is a virtual gallery of what we would have exhibited in
            person in our traditional end-of-semester show. While we can't be
            together during this difficult and unpredictable time, we can relish
            the experiences we shared making art together when Horvitz was our
            home, and our projects danced in Claudia's dreams.
          </p>
          <br />
          <h3>special thanks to</h3>
          <p style={{ textAlign: "center" }}>
            Read Baldwin • Lisa Deem • Lisa Dilts <br />
            Claudia Esslinger • Sarah Gaglione <br />
            Marcella Hackbardt • Craig Hill <br />
            Grace Lee Lawrence • Kelley Anne O'Brien <br />
            Ellen Sheffield • Gregory Spaid • Emily Zeller
            <br />
          </p>
        </div>
      </article>

      <footer style={{textAlign: "center", color: "grey", fontSize:".75em"}}>
            site built by{' '}
            <a href="https://shebar.nyc"
              rel="noopener noreferrer"
              target="_blank">
                Miles Shebar{' '}
              </a>
          </footer>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(relativePath: { eq: "DSC_0261.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
