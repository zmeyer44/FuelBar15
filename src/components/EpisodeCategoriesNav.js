import React from 'react'
import { Link } from 'gatsby'
import BlogSearch from './BlogSearch'
import './PostCategoriesNav.css'

const EpisodeCategoriesNav = ({ enableSearch }) => (
  <div className="PostCategoriesNav">
    <Link className="NavLink" exact="true" to={`/episodes/`}>
      All Episodes
    </Link>

    {enableSearch && <BlogSearch />}
  </div>
)

export default EpisodeCategoriesNav
