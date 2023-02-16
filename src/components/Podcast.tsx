import React from 'react'
import { IPodcast } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Podcast.module.scss'

export type PodcastProps = {
  podcast: IPodcast
}

const Podcast = ({ podcast }: PodcastProps) => {
  return (
    <li className={styles.container}>
      <Link href={`/podcast/${podcast.id.attributes['im:id']}`}>
          <Image 
              className={styles.image}
              alt={podcast.title.label}
              src={podcast['im:image'][2].label} 
              height={100} 
              width={100}
          />
            <span className={styles.title}>{podcast['im:name'].label.toUpperCase()}</span>
            <span className={styles.author}>Author: {podcast['im:artist'].label}</span>
        </Link>
    </li>
  )
}

export default Podcast