import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// const pageStyles = {
// color: "#232129",
// padding: "96px",
// fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }
// const headingStyles = {
// marginTop: 0,
// marginBottom: 64,
// maxWidth: 320,
// }

// const paragraphStyles = {
// marginBottom: 48,
// }


const AboutPage = () => {
    return (
        // <main>
        //     <h1>About Me</h1>
        //     <Link to="/">Back to Home</Link>.
        //     <p>
        //         Hi there! I'm the proud creator of this site, which I built with Gatsby.
        //     </p>
        // </main>
        <Layout pageTitle="About Ang">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    )
}


export const Head = () => <Seo title="About Me" />

export default AboutPage
