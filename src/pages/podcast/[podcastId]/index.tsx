import React, { useEffect } from 'react'
import styles from '@/styles/Home.module.scss'
import { useRouter } from 'next/router'
import { useGetPodcastEpisodesQuery } from '@/store/services/podcastApi'
import { IEpisode } from '@/types'
import { updateLoadingStatus } from '@/store/slices/loadingStatus.slice'
import { useAppDispatch } from '@/store'
import Link from 'next/link'

const PodcastDetail = () => {

  const dispatch = useAppDispatch();

  const { query } = useRouter();
  
  const { data, isLoading } = useGetPodcastEpisodesQuery(query.podcastId as string);

  useEffect(() => {
    dispatch(updateLoadingStatus(isLoading));
  }, [isLoading])

  return (
    <main className={styles.main}>
      <div className='details'>
        <p>Artist details</p>
      </div>

      <div>
        <div>
          <p>Episodes: {data?.length}</p>
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
                      data.map((episode: IEpisode) => {
                        return (
                          <li key={episode.trackId}>
                            <Link href={`/podcast/${query.podcastId}/episodes/${episode.trackId}`}>{episode.artistName} - {episode.trackName}</Link>
                            <p>{new Date(episode.releaseDate).toLocaleDateString()}</p>
                            <p>{new Date(episode.trackTimeMillis).getMinutes()}:{new Date(episode.trackTimeMillis).getSeconds()}</p>
                          </li>
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
    </main>
  )
}

export default PodcastDetail