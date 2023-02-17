import Image from 'next/image'
import React from 'react'
import styles from '@/styles/ArtistDetails.module.scss';
import Link from 'next/link';

export type ArtistDetailsProps = {
    title: string,
    artist: string,
    shortDescription: string,
    image: string,
    podcastId: string,
}

const ArtistsDetails = ({ title, image, artist, shortDescription, podcastId }: ArtistDetailsProps) => {
  return (
    <div className={styles.container}>
        <Link href={`/podcast/${podcastId}`}>
          <Image 
                className={styles.image}
                alt={title}
                src={image} 
                height={100} 
                width={100}
            />
        </Link>
        <hr />
        <Link href={`/podcast/${podcastId}`}>
            <span className={styles.title}>{title}</span>
            <span className={styles.artist}>by {artist}</span>
        </Link>
        <hr />
        <div className={styles.description}>
            <span>Description:</span>
            <p>{shortDescription}</p>
        </div>
    </div>
  )
}

export default ArtistsDetails