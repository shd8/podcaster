import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { podcastsApi } from '@/store/services/podcastApi'
import loadingSlice from './slices/loadingStatus.slice'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'


const rootReducer = combineReducers({
  [podcastsApi.reducerPath]: podcastsApi.reducer,
  loadingReducer: loadingSlice
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(podcastsApi.middleware),
    preloadedState
})}

setupListeners(setupStore().dispatch)

export type RootState = ReturnType<typeof rootReducer>

export const useAppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppStore = ReturnType<typeof setupStore>
