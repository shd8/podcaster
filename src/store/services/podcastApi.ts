import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import type { IPodcast, IPodcastApiResponse, IEpisode, IEpisodeResponse } from '@/types'

const SECONDS_IN_A_DAY = 60 * 60 * 24

export const podcastsApi = createApi({
  reducerPath: 'podcastsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_PODCASTS_ENDPOINT }),
  keepUnusedDataFor: SECONDS_IN_A_DAY,
  endpoints: (builder) => ({
    getAllPodcasts: builder.query<IPodcast[], void>({
      query: () => `us/rss/toppodcasts/limit=100/genre=1310/json`,
      transformResponse: (response: IPodcastApiResponse) => response.feed.entry
    }),
    getPodcastEpisodes: builder.query<IEpisode[], string>({
      query: (podcastId: string) => `lookup?id=${podcastId}&media=podcast&attributes=all&entity=podcastEpisode&sort=recent`,
      transformResponse: (response: IEpisodeResponse) => response.results
    }),
  }),
})

export const { useGetAllPodcastsQuery, useGetPodcastEpisodesQuery } = podcastsApi