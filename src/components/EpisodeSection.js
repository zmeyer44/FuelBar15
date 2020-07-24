import React from 'react'
import EpisodeCard from '../components/EpisodeCard'
import './PostSection.css'

class EpisodeSection extends React.Component {
  static defaultProps = {
    episodes: [],
    title: '',
    limit: 12,
    showLoadMore: true,
    loadMoreTitle: 'Load More',
    perPageLimit: 12
  }

  state = {
    limit: this.props.limit
  }

  increaseLimit = () =>
    this.setState(prevState => ({
      limit: prevState.limit + this.props.perPageLimit
    }))

  render() {
    const { episodes, title, showLoadMore, loadMoreTitle } = this.props,
      { limit } = this.state,
      visibleEpisodes = episodes.slice(0, limit || episodes.length)

    return (
      <div className="PostSection">
        {title && <h2 className="PostSection--Title">{title}</h2>}
        {!!visibleEpisodes.length && (
          <div className="PostSection--Grid">
            {visibleEpisodes.map((episode, index) => (
              <EpisodeCard key={episode.title + index} {...episode} />
            ))}
          </div>
        )}
        {showLoadMore && visibleEpisodes.length < episodes.length && (
          <div className="taCenter">
            <button className="button" onClick={this.increaseLimit}>
              {loadMoreTitle}
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default EpisodeSection
