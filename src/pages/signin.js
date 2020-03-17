import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SigninForm from "../containers/signinForm"

const Signin = () => (
    <Layout>
        <SEO title={'Sign In'} />
        <SigninForm />
    </Layout>
);

export default Signin;