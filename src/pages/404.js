import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ErrorPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    display: block;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ErrorPage>
      <h1>Nothing to see here!</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </ErrorPage>
  </Layout>
)

export default NotFoundPage
