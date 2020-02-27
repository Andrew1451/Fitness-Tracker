import React from "react"
import { Link } from "gatsby"
import Form from '../containers/form'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Form />
    {/* <form >
      <label style={{color: 'lime', fontFamily: 'Helvetica', display: 'block'}} for='exercise'>Name of Exercise</label>
      <input style={{marginBottom: '15px'}} type='text' id='exercise' name='exercise' placeholder='Exercise Name'></input>
      <label style={{color: 'lime', fontFamily: 'Helvetica', display: 'block'}} for='repsNumber'>Number of Reps</label>
      <input type='text' id='repsNumber' name='repsNumber' placeholder='Number of Reps'></input>
    </form> */}
    {/* <Link style={{
      position: 'absolute',
      bottom: '10%'
    }} to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
