import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

export interface LoadingState {
  loading: boolean
}

const initialState: LoadingState = { loading: false }

const loadingStatusSlice = createSlice({
  name: 'loadingStatus',
  initialState,
  reducers: {
    updateLoadingStatus(state, action: PayloadAction<boolean>) {
        state.loading = action.payload
    }
  },
})

export const { updateLoadingStatus } = loadingStatusSlice.actions

export const selectLoadingState = (state: RootState) => state.loadingReducer.loading;

export default loadingStatusSlice.reducer