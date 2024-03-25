import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
marginTop: 0,
marginBottom: 64,
maxWidth: 320,
}

const paragraphStyles = {
marginBottom: 48,
}


const AboutPage = () => {
    return (
        <main style={pageStyles}>
            <h1 style={headingStyles}>About Me</h1>
            <p style={paragraphStyles}>
                Hi there! I'm the proud creator of this site, which I built with Gatsby.
                <br />
                <br />
                <Link to="/">Back to Home</Link>.
            </p>
        </main>
    )
}

export default AboutPage

export const Head = () => (
    <>
    <title>About Me</title>
    <meta name="description" content="Your description"/>
    </>

)