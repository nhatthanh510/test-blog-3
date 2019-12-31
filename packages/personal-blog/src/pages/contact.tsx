import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../containers/Contact"

type ContactPageProps = {}

const ContactPage: React.FunctionComponent<ContactPageProps> = props => {
  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Thanh Nguyen's blog is a beautiful React Blog theme designed to showcase your work in style. Perfect for designers, artists, photographers and developers to use for their portfolio website."
      />

      <Contact />
    </Layout>
  )
}

export default ContactPage
