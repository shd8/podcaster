import '@/styles/globals.scss'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { setupStore } from '@/store'

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <Provider store={setupStore()}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
