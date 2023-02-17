import React, { useEffect } from 'react'
import styles from '@/styles/Header.module.scss'
import { useAppSelector } from '@/store'
import { selectLoadingState } from '@/store/slices/loadingStatus.slice'
import Link from 'next/link'

const Header = () => {

  const loading = useAppSelector(selectLoadingState)

  return (
    <>
    <div className={styles.container}>
        <Link href='/' className={styles.h1}>Podcaster</Link>
        <span 
          className={loading ? styles.loading : styles.loaded} 
          data-testid={loading ? 'loading' : 'loaded'}
        />
    </div>
        <hr className={styles.hr} />
        </>
  )
}

export default Header