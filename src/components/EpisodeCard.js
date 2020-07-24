import React from 'react'
import { Link } from 'gatsby'
import Image from './Image'
import './PostCard.css'

const EpisodeCard = ({
  featuredImage,
  title,
  slug,
  className = '',
  ...props
}) => (
  <Link to={slug} className={`PostCard ${className}`}>
    {featuredImage && (
      <div className="PostCard--Image relative">
        <Image background src={featuredImage} alt={title} />
      </div>
    )}
    <div className="PostCard--Content">
      {title && <h3 className="PostCard--Title">{title}</h3>}
    </div>
  </Link>
)

export default EpisodeCard
