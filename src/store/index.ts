import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { podcastsApi } from '@/store/services/podcastApi'

const rootReducer = combineReducers({
  [podcastsApi.reducerPath]: podcastsApi.reducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(podcastsApi.middleware),
    preloadedState
  })
}

setupListeners(setupStore().dispatch)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>