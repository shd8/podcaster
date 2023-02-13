import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { podcastsApi } from '@/store/services/podcastApi'

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <ApiProvider api={podcastsApi}>
      <Component {...pageProps} />
    </ApiProvider>
  )
}

export default App
