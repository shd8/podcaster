import React from 'react'
import { IPodcast } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

export type PodcastProps = {
    podcast: IPodcast
}

const Podcast = ({ podcast }: PodcastProps) => {
  return (
    <li>
      <Link href={`/podcast/${podcast.id.attributes['im:id']}`}>
          <Image 
              alt={podcast.title.label}
              src={podcast['im:image'][2].label} 
              height={100} 
              width={100}
          />
          <p>{podcast['im:name'].label.toUpperCase()}</p>
          <p>Author: {podcast['im:artist'].label}</p>
        </Link>
    </li>
  )
}

export default Podcast