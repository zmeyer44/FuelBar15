import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import qs from 'qs'

import PageHeader from '../components/PageHeader'
import EpisodeSection from '../components/EpisodeSection'
import EpisodeCategoriesNav from '../components/EpisodeCategoriesNav'
import Layout from '../components/Layout'

/**
 * Filter posts by date. Feature dates will be fitered
 * When used, make sure you run a cronejob each day to show schaduled content. See docs
 *
 * @param {posts} object
 */
export const byDate = posts => {
  const now = Date.now()
  return posts.filter(post => Date.parse(post.date) <= now)
}
/**
 * filter posts by category.
 *
 * @param {posts} object
 * @param {title} string
 * @param {contentType} string
 */
export const byCategory = (posts, title, contentType) => {
  const isCategory = contentType === 'postCategories'
  const byCategory = post =>
    post.categories &&
    post.categories.filter(cat => cat.category === title).length
  return isCategory ? posts.filter(byCategory) : posts
}

// Export Template for use in CMS preview
export const EpisodeIndexTemplate = ({
  title,
  episodes = [],
  enableSearch = true,
  contentType
}) => (
  <Location>
    {({ location }) => {
      let filteredEpisodes =
        episodes && !!episodes.length
          ? byCategory(byDate(episodes), title, contentType)
          : []

      let queryObj = location.search.replace('?', '')
      queryObj = qs.parse(queryObj)

      if (enableSearch && queryObj.s) {
        const searchTerm = queryObj.s.toLowerCase()
        filteredEpisodes = filteredEpisodes.filter(post =>
          post.frontmatter.title.toLowerCase().includes(searchTerm)
        )
      }

      return (
        <main className="Blog">
          <PageHeader
            title="Episodes"
            subtitle="Health is Wealth"
            backgroundImage="https://www.fillmurray.com/200/300"
          />

          {
            <section className="section thin">
              <div className="container">
                <EpisodeCategoriesNav enableSearch />
              </div>
            </section>
          }

          {!!episodes.length && (
            <section className="section">
              <div className="container">
                <EpisodeSection episodes={filteredEpisodes} />
              </div>
            </section>
          )}
        </main>
      )
    }}
  </Location>
)

// Export Default BlogIndex for front-end
const EpisodeIndex = ({ data: { episodes } }) => (
  <Layout>
    <EpisodeIndexTemplate
      episodes={episodes.edges.map(episode => ({
        ...episode.node,
        ...episode.node.frontmatter,
        ...episode.node.fields
      }))}
    />
  </Layout>
)

export default EpisodeIndex

export const pageQuery = graphql`
  ## Query for BlogIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query EpisodeIndex {
    episodes: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "episodes" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
            featuredImage
          }
        }
      }
    }
  }
`
