import React from 'react'
import styles from '@/styles/Home.module.scss'
import { useRouter } from 'next/router'

const PodcastDetail = () => {

  const { query } = useRouter();

  return (
    <main className={styles.main}>
      <h1>{query.podcastId}</h1>
    </main>
  )
}

export default PodcastDetail