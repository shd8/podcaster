import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useGetPodcastEpisodesQuery } from '@/store/services/podcastApi';
import { useAppDispatch } from '@/store';
import { updateLoadingStatus } from '@/store/slices/loadingStatus.slice';
import { IEpisode } from '@/types';
import EpisodeTrack from '@/components/EpisodeTrack';

const Episode = () => {
    const [episode, setEpisode] = useState({} as IEpisode);

    const dispatch = useAppDispatch();

    const { query } = useRouter();

    const { data, isLoading } = useGetPodcastEpisodesQuery(query.podcastId as string);

    useEffect(() => {
        const episodeFound = data?.filter(({ kind }) => kind === 'podcast-episode').find(episode => `${episode.trackId}` === query.episodeId);

        if (episodeFound) {
            setEpisode(episodeFound);
            console.log(episodeFound)
        }

        dispatch(updateLoadingStatus(isLoading));

    }, [data, isLoading])

    return (
        <>
            <div>Episode {query.episodeId}</div>
            <div className='details'>

            </div>
            {
                data 
                ? <EpisodeTrack episode={episode} />
                : <p>No data</p>
            }
        </>       
    )
}

export default Episode