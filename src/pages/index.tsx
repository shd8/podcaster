import { ChangeEvent, useEffect, useState } from 'react';
import { useGetAllPodcastsQuery } from '@/store/services/podcastApi'
import Podcast from '@/components/Podcast'
import { IPodcast } from '@/types';
import { includeNormalizedStrings } from '@/utils/text.utils';
import { updateLoadingStatus } from '@/store/slices/loadingStatus.slice';
import { useAppDispatch } from '@/store';
import SearchCount from '@/components/SearchCount';
import styles from '@/styles/Landing.view.module.scss'

const Home = () => {
  const dispatch = useAppDispatch();

  const { data, isLoading } = useGetAllPodcastsQuery();

  const [filteredData, setFilteredData] = useState(data || []);

  useEffect(() => {
    setFilteredData(data || [])
    dispatch(updateLoadingStatus(isLoading));
  }, [isLoading, data])

  const handleOnChangeSearch = ({ target }: ChangeEvent<HTMLInputElement> ) => {
    const { value } = target;

    const dataAfterFilter = data?.filter((podcast: IPodcast) => (
      includeNormalizedStrings(podcast['im:name'].label, value)
      || 
      includeNormalizedStrings(podcast['im:artist'].label, value)
    ))

    setFilteredData(dataAfterFilter || []);
  }

  return (
    <>
      <SearchCount onChange={handleOnChangeSearch} length={filteredData.length} />
      {
        isLoading 
          ?
            <p>Loading ...</p>
          :
          <ul className={styles.podcastsList}>
            {
              filteredData 
              ? 
              filteredData.map((podcast: IPodcast) => <Podcast key={podcast.id.attributes['im:id']} podcast={podcast} />)
              : <p>No data to be displayed</p>
            }
          </ul>
        }
    </>
  )
}

export default Home;
