import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'

const Homepage = () => {
  return (
    <Layout>
      <h1>This App Rules</h1>
      <p>Log in to find out why.</p>
      <Link to='/dashboard'>Go to the Dashboard</Link>
    </Layout>
  )
}

export default Homepage
