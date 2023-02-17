import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useGetPodcastEpisodesQuery } from '@/store/services/podcastApi';
import { useAppDispatch } from '@/store';
import { updateLoadingStatus } from '@/store/slices/loadingStatus.slice';
import { IEpisode } from '@/types';
import EpisodeTrack from '@/components/EpisodeTrack';
import ArtistsDetails from '@/components/ArtistsDetails';
import styles from '@/styles/Episode.view.module.scss';

const Episode = () => {
    const [episode, setEpisode] = useState({} as IEpisode);
    const [podcast, setPodcast] = useState({} as IEpisode);

    const dispatch = useAppDispatch();

    const { query } = useRouter();

    const { data, isLoading } = useGetPodcastEpisodesQuery(query.podcastId as string);

    useEffect(() => {
        const episodeFound = data?.filter(({ kind }) => kind === 'podcast-episode').find(episode => `${episode.trackId}` === query.episodeId);
        const podcastFound = data?.find(({ kind }) => kind === 'podcast')

        if (episodeFound) {
            setEpisode(episodeFound);
        }

        if (podcastFound) {
            setPodcast(podcastFound)
        }


        dispatch(updateLoadingStatus(isLoading));

    }, [data, isLoading])

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
            />
            {
                data 
                ? 
                <div className={styles.episodeTrack}>
                    <EpisodeTrack episode={episode} />
                </div>
                : <p>No data</p>
            }
            </>    
            }
            </div>
    )
    
}

export default Episode