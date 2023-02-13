import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Podcast } from '@/types'

// Define a service using a base URL and expected endpoints
export const podcastsApi = createApi({
  reducerPath: 'podcastsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json' }),
  endpoints: (builder) => ({
    getAllPodcasts: builder.query<Podcast, string>({
      query: () => `/`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPodcastsQuery } = podcastsApi