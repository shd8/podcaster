import '@/styles/globals.scss'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { setupStore } from '@/store'
import Header from '@/components/Header'
import styles from '@/styles/Home.module.scss'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <Provider store={setupStore()}>
      <Head>
        <title>Podcaster</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}

export default App
