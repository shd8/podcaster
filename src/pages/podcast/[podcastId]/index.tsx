import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useGetPodcastEpisodesQuery } from '@/store/services/podcastApi'
import { IEpisode } from '@/types'
import { updateLoadingStatus } from '@/store/slices/loadingStatus.slice'
import { useAppDispatch } from '@/store'
import Link from 'next/link'
import EpisodeLink from '@/components/EpisodeLink'

const PodcastDetail = () => {

  const dispatch = useAppDispatch();

  const [filteredData, setFilteredData] = useState([] as IEpisode[])

  const { query } = useRouter();
  
  const { data, isLoading } = useGetPodcastEpisodesQuery(query.podcastId as string);

  useEffect(() => {

    if (!isLoading && data) {
      const podcastEpisodes = data.filter(({ kind }) => kind === 'podcast-episode')
      setFilteredData(podcastEpisodes)
    }

    dispatch(updateLoadingStatus(isLoading));
  }, [isLoading])

  return (
    <>
      <div className='details'>
        <p>Artist details</p>
      </div>

      <div>
        <div>
          <p>Episodes: {filteredData?.length}</p>
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
                      filteredData.map((episode: IEpisode) => {
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
    </>
  )
}

export default PodcastDetail