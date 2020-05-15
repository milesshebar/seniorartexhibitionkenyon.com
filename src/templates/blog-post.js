import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FaInstagram } from "react-icons/fa"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article
          className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
        >
          <header className="post-content-header">
            <h1 className="post-content-title">
              <a
                href={post.frontmatter.site}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="post-content-mats">
                  {post.frontmatter.title}
                </span>
              </a>{" "}
              {post.frontmatter.instagram && (
                <span className="post-content-mats">
                  <a
                    href={post.frontmatter.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </span>
              )}
              <br />
              {post.frontmatter.work_title}
            </h1>
         
            
              
          </header>

          <p class="post-content-excerpt">
          {post.frontmatter.subtitle && (
                   <h3 className="post-content-subtitle">
                {post.frontmatter.subtitle}
                </h3>
              )}
            <em>{post.frontmatter.materials}</em>
            <br />
            <span class="">{post.frontmatter.measurements}</span>
          </p>

          {post.frontmatter.thumbnail && (
            <div className="post-content-image">
              <Img
                className="kg-image"
                fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                alt={post.frontmatter.title}
              />
            </div>
          )}

          <div
            className="post-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          
        </article>
        <footer className="post-content-footer" style={{textAlign: "left", color: "grey"}}>
            {post.frontmatter.description}
          </footer>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        work_title
        materials
        measurements
        instagram
        subtitle
        site
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
