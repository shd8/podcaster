import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.scss'
import { useGetPodcastEpisodesQuery } from '@/store/services/podcastApi';
import { useAppDispatch } from '@/store';
import { updateLoadingStatus } from '@/store/slices/loadingStatus.slice';
import { IEpisode } from '@/types';

const Episode = () => {
    const [episode, setEpisode] = useState({} as IEpisode);

    const dispatch = useAppDispatch();

    const { query } = useRouter();

    const { data, isLoading } = useGetPodcastEpisodesQuery(query.podcastId as string);

    useEffect(() => {
        const episodeFound = data?.find(episode => `${episode.trackId}` === query.episodeId);

        if (episodeFound) {
            setEpisode(episodeFound);
        }

        dispatch(updateLoadingStatus(isLoading));

    }, [data, isLoading])

    return (
        <main className={styles.main}>
            <div>Episode {query.episodeId}</div>
            {
                data ? 
                <p>{episode.artistName}</p>
                :
                <p>No data</p>
            }
        </main>
    )
}

export default Episode