import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Podcast, PodcastApiResponse } from '@/types'

const SECONDS_IN_A_DAY = 60 * 60 * 24

export const podcastsApi = createApi({
  reducerPath: 'podcastsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cors-anywhere.herokuapp.com/https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json' }),
  keepUnusedDataFor: SECONDS_IN_A_DAY,
  endpoints: (builder) => ({
    getAllPodcasts: builder.query<Podcast[], void>({
      query: () => ``,
      transformResponse: (response: PodcastApiResponse) => response.feed.entry
    }),
  }),
})

export const { useGetAllPodcastsQuery } = podcastsApi