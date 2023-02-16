import { IEpisode } from '@/types'
import Link from 'next/link'
import React from 'react'

export type EpisodeLinkProps = {
    episode: IEpisode,
    podcastId: string
}

const EpisodeLink = ({ episode, podcastId }: EpisodeLinkProps) => {
  return (
    <li>
        <Link href={`/podcast/${podcastId}/episodes/${episode.trackId}`}>{episode.artistName} - {episode.trackName}</Link>
        <p>{new Date(episode.releaseDate).toLocaleDateString()}</p>
        <p>{new Date(episode.trackTimeMillis).getMinutes()}:{new Date(episode.trackTimeMillis).getSeconds()}</p>
    </li>
  )
}

export default EpisodeLink