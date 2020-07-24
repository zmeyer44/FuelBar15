import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Gallery from '../components/Gallery'
import Popup from '../components/Popup'

// Export Template for use in CMS preview
export const ComponentsPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
  section2,
  video,
  videoPoster,
  videoTitle,
  accordion,
  body,
  gallery
}) => (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container">
        <Content source={section1} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2>Our gallery component</h2>
        <Gallery images={gallery} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Content source={section2} />
      </div>
    </section>

    <section className="BackgroundVideo-section section">
      <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
        {video && <source src={video} type="video/mp4" />}
      </BackgroundVideo>
    </section>

    <section className="section">
      <div className="container">
        <Accordion items={accordion} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Popup>
          <Content source={section1} />
        </Popup>
      </div>
    </section>
  </main>
)

const ComponentsPage = () => (
  <Layout>
    <main>
      <PageHeader
        title="About"
        subtitle="A little bit about me"
        backgroundImage="https://theundefeated.com/wp-content/uploads/2016/08/cp_marshall.jpg?w=681 1x, https://theundefeated.com/wp-content/uploads/2016/08/cp_marshall.jpg?w=1362 2x"
      />
      <section className="section">
        <div className="container">
          <h1>test</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            vel asperiores cum consequuntur veritatis consectetur amet illum
            totam! Cupiditate dolorem libero, iure consectetur quidem
            necessitatibus nobis possimus veniam sit tempora illum perferendis
            earum quam laborum itaque esse asperiores harum, corrupti at? Nemo
            reprehenderit, nihil maiores vitae adipisci esse dignissimos soluta
            iure architecto vel, aspernatur nesciunt autem quod magni deleniti.
            Illo aliquam modi explicabo saepe eaque nihil voluptates, ea
            eligendi officia, odit ad sapiente necessitatibus, debitis assumenda
            perspiciatis natus! Veniam, obcaecati placeat! Dignissimos nesciunt
            quae quo eos laborum harum maxime repellat sequi iure quasi! Atque
            consequatur voluptas, vel laudantium explicabo ducimus!
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Our gallery component</h2>
          {/* <Gallery images={gallery} /> */}
        </div>
      </section>

      <section className="section">
        <div className="container">{/* <Content source={section2} /> */}</div>
      </section>

      <section className="BackgroundVideo-section section">
        {/* <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
          {video && <source src={video} type="video/mp4" />}
        </BackgroundVideo> */}
      </section>

      <section className="section">
        <div className="container">{/* <Accordion items={accordion} /> */}</div>
      </section>

      <section className="section">
        <div className="container">
          {/* <Popup>
            <Content source={section1} />
          </Popup> */}
        </div>
      </section>
    </main>
  </Layout>
)

export default ComponentsPage
