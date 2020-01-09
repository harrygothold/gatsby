import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

export default () => {
  const { allFile } = useStaticQuery(graphql`
    query GetImageData {
      allFile {
        edges {
          node {
            relativePath
            size
            extension
            birthTime
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Hello from page 3</h1>
      <h3>Image File Data</h3>
      <table>
        <thead>
          <tr>
            <th>Relative Path</th>
            <th>Size of Image</th>
            <th>Image Extension</th>
            <th>BirthTime</th>
          </tr>
        </thead>
        <tbody>
          {allFile.edges.map(({ node }, i) => (
            <tr key={i}>
              <td>{node.relativePath}</td>
              <td>{node.size}</td>
              <td>{node.extension}</td>
              <td>{node.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/page-2">Go to page 2</Link>
    </Layout>
  )
}
