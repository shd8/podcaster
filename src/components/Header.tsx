import React, { useEffect } from 'react'
import styles from '@/styles/Header.module.scss'
import { useAppSelector } from '@/store'
import { selectLoadingState } from '@/store/slices/loadingStatus.slice'

const Header = () => {

    const loading = useAppSelector(selectLoadingState)

  return (
    <>
   
    <div className={styles.container}>
        <h1 className={styles.h1}>Podcaster</h1>
        <span 
          className={!loading ? styles.loading : styles.loaded} 
          data-testid={loading ? 'loading' : 'loaded'}
        />
    </div>
        <hr className={styles.hr} />
        </>
  )
}

export default Header