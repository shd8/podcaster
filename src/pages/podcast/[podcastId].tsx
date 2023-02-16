import React, { useEffect } from 'react'
import styles from '@/styles/Home.module.scss'
import { useRouter } from 'next/router'
import { useGetPodcastEpisodesQuery } from '@/store/services/podcastApi'
import { IEpisode } from '@/types'
import { updateLoadingStatus } from '@/store/slices/loadingStatus.slice'
import { useAppDispatch } from '@/store'

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
            <ul>
              {
                <div>
                  <div>
                    <li>Title</li>
                    <li>Date</li>
                    <li>Duration</li>
                  </div>
                  {
                    data
                    ? 
                    data.map((episode: IEpisode) => {
                      return (
                        <li key={episode.trackId}>
                          <p>{episode.artistName} - {episode.trackName}</p>
                          <p>{new Date(episode.releaseDate).toLocaleDateString()}</p>
                          <p>{new Date(episode.trackTimeMillis).getMinutes()}:{new Date(episode.trackTimeMillis).getSeconds()}</p>
                        </li>
                      )
                    })
                    : <p>No data to be displayed</p>
                  }
                </div>
              }
            </ul>
          }
        </ul>
      </div>
    </main>
  )
}

export default PodcastDetail