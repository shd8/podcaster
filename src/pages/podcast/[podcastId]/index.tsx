import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useGetPodcastEpisodesQuery } from '@/store/services/podcastApi'
import { IEpisode } from '@/types'
import { updateLoadingStatus } from '@/store/slices/loadingStatus.slice'
import { useAppDispatch } from '@/store'
import EpisodeLink from '@/components/EpisodeLink'
import styles from '@/styles/Podcast.view.module.scss';
import ArtistsDetails from '@/components/ArtistDetails'

const PodcastDetail = () => {

  const dispatch = useAppDispatch();

  const [filteredEpisodes, setFilteredEpisodes] = useState([] as IEpisode[])
  const [podcast, setPodcast] = useState({} as IEpisode)

  const { query } = useRouter();
  
  const { data, isLoading } = useGetPodcastEpisodesQuery(query.podcastId as string);

  useEffect(() => {

    if (!isLoading && data) {
      const podcastEpisodes = data.filter(({ kind }) => kind === 'podcast-episode')
      const podcastFound = data.find(({ kind }) => kind === 'podcast')

      if (podcastFound) setPodcast(podcastFound);
      setFilteredEpisodes(podcastEpisodes)
    }

    dispatch(updateLoadingStatus(isLoading));
  }, [isLoading])

  return (
    <div className={styles.container}>
      {
        isLoading 
          ?
            <p>Loading ...</p>
          : <>
        <ArtistsDetails 
          artist={podcast.artistName}
          image={podcast.artworkUrl600}
          shortDescription={podcast.primaryGenreName}
          title={podcast.trackName}
          podcastId={query.podcastId as string}
        />
        <div className={styles.episodesListContainer}>
          <div className={styles.episodesSize}>
            <span>Episodes: {filteredEpisodes?.length}</span>
          </div>
          {
            <div className={styles.episodesList}>
              <ul className={styles.episodesHeader}>
                <li>Title</li>
                <li className={styles.date}>Date</li>
                <li className={styles.duration}>Duration</li>
              </ul>
              <hr />
              <ul data-testid='episodes-list' className={styles.episodesLinks}>
                {
                  data
                  ? 
                  filteredEpisodes.map((episode: IEpisode) => {
                    return (
                      <EpisodeLink key={episode.trackId} episode={episode} podcastId={query.podcastId as string} />
                    )
                  })
                  : <p>No data to be displayed</p>
                }
              </ul>
            </div>
          }

        </div>
      </>}
    </div>
  )
}

export default PodcastDetail