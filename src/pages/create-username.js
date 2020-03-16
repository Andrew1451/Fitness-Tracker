import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SignupForm from "../containers/signupForm"

const CreateUsername = () => (
    <Layout>
        <SEO title="Create Username" />
        <SignupForm />
    </Layout>
);

export default CreateUsername;