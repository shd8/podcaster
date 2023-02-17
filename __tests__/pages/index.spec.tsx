import React from 'react';
import fetchMock from "jest-fetch-mock";
import { renderHook, act, screen, waitFor } from '@testing-library/react'
import Home from '../../src/pages/index'
import '@testing-library/jest-dom'
import { renderWithProviders, setupApiStore } from '../../utils/test.utils'
import { podcastsApi, useGetAllPodcastsQuery } from '../../src/store/services/podcastApi'
import { Provider } from 'react-redux'
import { ReactNode } from 'react'
import Header from "../../src/components/Header";
import '@testing-library/jest-dom'

const wrapper = ({ children }: {children?: ReactNode}) => {
  const storeRef: any = setupApiStore(podcastsApi);
  return <Provider store={storeRef.store}>
    <Header/>
    {children}
    </Provider>;
};

describe('Home', () => {
  it('renders a title', async () => {

    fetchMock.mockResponse(JSON.stringify({}));
    const { result } = renderHook(
      () => useGetAllPodcastsQuery(),
      { wrapper }
    );

    renderWithProviders(<Home />, { preloadedState: { loadingReducer: { loading: true } } })

    const heading = screen.getByText('Podcaster')

    act(() => expect(heading).toBeInTheDocument())
  })

  it('Does not show loading after loading podcasts', async () => {

    renderWithProviders(<Home />, {preloadedState: {loadingReducer: {loading: false}}})

    const loading = screen.getByText('Loading ...')

    await waitFor(() => {
      expect(loading).not.toBeInTheDocument()
    })
    })
})