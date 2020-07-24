import React from 'react'
import Image from './Image'
import './PostCard.css'

const EpisodeCard = ({
  featuredImage,
  title,
  slug,
  link,
  className = '',
  ...props
}) => (
  <a href={link} className={`PostCard ${className}`}>
    {featuredImage && (
      <div className="PostCard--Image relative">
        <Image background src={featuredImage} alt={title} />
      </div>
    )}
    <div className="PostCard--Content">
      {title && <h3 className="PostCard--Title">{title}</h3>}
    </div>
  </a>
)

export default EpisodeCard
