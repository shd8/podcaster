import React from 'react'
import { IEpisode } from '@/types'
import styles from '@/styles/EpisodeTrack.module.scss';

export type EpisodeTrackProps = {
    episode: IEpisode
}

const EpisodeTrack = ({ episode }: EpisodeTrackProps) => {
  return (
    <div>
      <p className={styles.title}>{episode.collectionName} - {episode.trackName}</p>
      <p className={styles.description}>{episode.description}</p>
      <audio controls>
          <source src={episode.episodeUrl} type="audio/mp3" />
      </audio>
    </div>
  )
}

export default EpisodeTrack