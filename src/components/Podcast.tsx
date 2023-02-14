import React from 'react'
import { Podcast } from '@/types'
import Image from 'next/image'

export type PodcastProps = {
    podcast: Podcast
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
    </li>
  )
}

export default Podcast