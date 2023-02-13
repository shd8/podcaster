import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Podcast, PodcastApiResponse } from '@/types'

export const podcastsApi = createApi({
  reducerPath: 'podcastsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cors-anywhere.herokuapp.com/https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json' }),
  endpoints: (builder) => ({
    getAllPodcasts: builder.query<Podcast[], void>({
      query: () => ``,
      transformResponse: (response: PodcastApiResponse) => response.feed.entry
    }),
  }),
})

export const { useGetAllPodcastsQuery } = podcastsApi