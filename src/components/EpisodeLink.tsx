import { IEpisode } from '@/types'
import Link from 'next/link'
import React from 'react'
import styles from '@/styles/EpisodeLink.module.scss';

export type EpisodeLinkProps = {
    episode: IEpisode,
    podcastId: string
}

const EpisodeLink = ({ episode, podcastId }: EpisodeLinkProps) => {
  return (
    <li className={styles.episodeLink}>
      <Link href={`/podcast/${podcastId}/episodes/${episode.trackId}`}>{episode.trackName} - {episode.collectionName}</Link>
      <p className={styles.date}>
          {new Date(episode.releaseDate).toLocaleDateString()}
      </p>
      <p className={styles.duration}>
        {new Date(episode.trackTimeMillis).getMinutes()}:{new Date(episode.trackTimeMillis).getSeconds()}
      </p>
    </li>
  )
}

export default EpisodeLink