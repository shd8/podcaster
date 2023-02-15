import '@/styles/globals.scss'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { setupStore } from '@/store'
import styles from '@/styles/Home.module.scss'

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <Provider store={setupStore()}>
      <h1 className={styles.h1}>Podcaster</h1>
      <hr className={styles.hr} />
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
