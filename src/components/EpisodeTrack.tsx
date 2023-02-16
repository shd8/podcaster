import React from 'react'
import { IEpisode } from '@/types'

export type EpisodeTrackProps = {
    episode: IEpisode
}

const EpisodeTrack = ({ episode }: EpisodeTrackProps) => {
  return (
    <div>
        <p>{episode.collectionName}</p>
        <p>{episode.artistName} - {episode.trackName}</p>
        <p>{episode.description}</p>
        <audio controls>
            <source src={episode.episodeUrl} type="audio/mp3" />
        </audio>
    </div>
  )
}

export default EpisodeTrack