import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

export default () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query GetMarkdownPosts {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            excerpt
          }
        }
      }
    }
  `)
  console.log(allMarkdownRemark)
  return (
    <Layout>
      <div>
        <h1 style={{ display: "inlineBlock", borderBottom: "1px solid black" }}>
          Gatsby Garb Blog
        </h1>
        <h4>
          {allMarkdownRemark.totalCount} Post
          {allMarkdownRemark.totalCount > 1 && "s"}
        </h4>
        {allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              {node.frontmatter.title}
              <span style={{ color: "#bbb" }}> - {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}
