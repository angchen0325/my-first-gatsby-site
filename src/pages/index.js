import * as React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"



const IndexPage = () => {
  return (
    // <main>
    //   <h1>Welcome to my Gatsby site!</h1>
    //   <Link to='/about'>About</Link> 
    //   <p>I'm making this by following the Gatsby Tutorial.
    //   </p>
    // </main>
    <Layout pageTitle={"Home Page"}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Dragon wallpaper"
        src="../images/cny24_dragon_wallpaper_mac.png"
      />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home Page" />
