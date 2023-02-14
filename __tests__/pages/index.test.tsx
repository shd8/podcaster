import fetchMock from "jest-fetch-mock";
import { screen, renderHook, act } from '@testing-library/react'
import Home from '@/pages/index'
import '@testing-library/jest-dom'
import { renderWithProviders, setupApiStore } from '../../utils/test.utils'
import { podcastsApi, useGetAllPodcastsQuery } from '@/store/services/podcastApi'
import { Provider } from 'react-redux'
import { ReactNode } from 'react'

const wrapper = ({ children }: {children?: ReactNode}) => {
  const storeRef: any = setupApiStore(podcastsApi);
  return <Provider store={storeRef.store}>{children}</Provider>;
};

describe('Home', () => {
  it('renders a title', async () => {

    fetchMock.mockResponse(JSON.stringify({}));
    const { result } = renderHook(
      () => useGetAllPodcastsQuery(),
      { wrapper }
    );

    renderWithProviders(<Home />)

    const heading = screen.getByText('Podcaster')

    await act(() => expect(heading).toBeInTheDocument())
  })
})