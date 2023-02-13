import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { podcastsApi } from '@/store/services/podcastApi'

export const store = configureStore({
  reducer: {
    [podcastsApi.reducerPath]: podcastsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(podcastsApi.middleware),
})

setupListeners(store.dispatch)