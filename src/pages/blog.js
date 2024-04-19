import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = () => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here, and I'll be using markdown to format them.
        <br></br>
        Let's make our dream!
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage