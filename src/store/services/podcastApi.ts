import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IPodcast, IPodcastApiResponse } from '@/types'

const SECONDS_IN_A_DAY = 60 * 60 * 24

export const podcastsApi = createApi({
  reducerPath: 'podcastsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_PODCASTS_ENDPOINT }),
  keepUnusedDataFor: SECONDS_IN_A_DAY,
  endpoints: (builder) => ({
    getAllPodcasts: builder.query<IPodcast[], void>({
      query: () => ``,
      transformResponse: (response: IPodcastApiResponse) => response.feed.entry
    }),
  }),
})

export const { useGetAllPodcastsQuery } = podcastsApi