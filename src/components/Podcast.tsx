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
        <Image 
            alt={podcast.title.label}
            src={podcast['im:image'][2].label} 
            height={100} 
            width={100}
        />
        <Link href={`/podcast/${podcast.id.attributes['im:id']}`}>
          {podcast['im:name'].label.toUpperCase()}
        </Link>
        <p>Author: {podcast['im:artist'].label}</p>
    </li>
  )
}

export default Podcast