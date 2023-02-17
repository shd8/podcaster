import Image from 'next/image'
import React from 'react'
import styles from '@/styles/ArtistDetails.module.scss';

export type ArtistDetailsProps = {
    title: string,
    artist: string,
    shortDescription: string,
    image: string
}

const ArtistsDetails = ({ title, image, artist, shortDescription }: ArtistDetailsProps) => {
  return (
    <div className={styles.container}>
        <Image 
              className={styles.image}
              alt={title}
              src={image} 
              height={100} 
              width={100}
          />
        <hr />
        <div>
            <span className={styles.title}>{title}</span>
            <span className={styles.artist}>by {artist}</span>
        </div>
        <hr />
        <div className={styles.description}>
            <span>Description:</span>
            <p>{shortDescription}</p>
        </div>
    </div>
  )
}

export default ArtistsDetails