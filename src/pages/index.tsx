import { ChangeEvent, useEffect, useState } from 'react';
import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { useGetAllPodcastsQuery } from '@/store/services/podcastApi'
import Podcast from '@/components/Podcast'
import { IPodcast } from '@/types';
import { includeNormalizedStrings } from '@/utils/text.utils';

const Home = () => {

  const { data, isLoading } = useGetAllPodcastsQuery();

  const [filteredData, setFilteredData] = useState(data || []);

  useEffect(() => {
    setFilteredData(data || [])
  }, [isLoading])

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
      <Head>
        <title>Podcaster</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.h1}>Podcaster</h1>
        <hr className={styles.hr} />
        <p className={styles.counter} data-testid='counter'>{filteredData.length}</p>
        <input defaultValue={''} type="text" name="search" id="" onChange={handleOnChangeSearch} />
        {
          isLoading 
            ?
              <p>Loading ...</p>
            :
            <ul>
              {
                filteredData 
                ? 
                filteredData.map((podcast: IPodcast) => <Podcast key={podcast.id.attributes['im:id']} podcast={podcast} />)
                : <p>No data to be displayed</p>
              }
            </ul>
          }
      </main>
    </>
  )
}

export default Home;
