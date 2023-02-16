import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { podcastsApi } from '@/store/services/podcastApi'
import loadingSlice from './slices/loadingStatus.slice'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'


const rootReducer = combineReducers({
  [podcastsApi.reducerPath]: podcastsApi.reducer,
  loadingReducer: loadingSlice
})

export const setupStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(podcastsApi.middleware),
})

setupListeners(setupStore.dispatch)

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof setupStore.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

