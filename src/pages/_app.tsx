import '@/styles/globals.scss'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { setupStore } from '@/store'
import Header from '@/components/Header'

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <Provider store={setupStore()}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
