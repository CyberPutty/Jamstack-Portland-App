import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Site for Jamstack</p>
    <p>Something Great Coming Soon....</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
