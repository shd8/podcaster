import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useGetPodcastEpisodesQuery } from '@/store/services/podcastApi'
import { IEpisode } from '@/types'
import { updateLoadingStatus } from '@/store/slices/loadingStatus.slice'
import { useAppDispatch } from '@/store'
import EpisodeLink from '@/components/EpisodeLink'
import styles from '@/styles/Podcast.view.module.scss';
import ArtistsDetails from '@/components/ArtistsDetails'

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
      <ArtistsDetails 
        artist={podcast.artistName}
        image={podcast.artworkUrl600}
        shortDescription={podcast.primaryGenreName}
        title={podcast.trackName}
      />
      <div className={styles.episodesListContainer}>
        <div>
          <p>Episodes: {filteredEpisodes?.length}</p>
        </div>        
        <ul>
        {
          isLoading 
            ?
              <p>Loading ...</p>
            :
            <div>
              {
                <ul>
                  <ul>
                    <li>Title</li>
                    <li>Date</li>
                    <li>Duration</li>
                  </ul>
                  <ul data-testid='episodes-list'>
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
                </ul>
              }
            </div>
          }
        </ul>
      </div>
    </div>
  )
}

export default PodcastDetail