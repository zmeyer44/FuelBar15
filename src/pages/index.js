import React from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
// Export Default HomePage for front-end
const HomePage = () => (
  <Layout>
    <main className="Home">
      <PageHeader
        large
        title="test-title"
        subtitle="test-subtitle"
        backgroundImage="https://www.fillmurray.com/200/300"
      />
      <div className="container">
        <div className="col-6">
          <h2>test</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            voluptate? Molestias, voluptate excepturi ratione doloremque amet
            illo tempore odio sunt obcaecati quam a magni odit facilis fuga unde
            error fugiat!
          </p>
        </div>
        <div className="col-6">
          <h2>test 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            voluptate? Molestias, voluptate excepturi ratione doloremque amet
            illo tempore odio sunt obcaecati quam a magni odit facilis fuga unde
            error fugiat!
          </p>
        </div>
      </div>
    </main>
  </Layout>
)

export default HomePage
