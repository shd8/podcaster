import React, { useEffect } from 'react'
import styles from '@/styles/Home.module.scss'
import { useAppSelector } from '@/store'
import { selectLoadingState } from '@/store/slices/loadingStatus.slice'

const Header = () => {

    const loading = useAppSelector(selectLoadingState)

    useEffect(() => {
        console.log(loading)
    }, [loading])

  return (
    <div>
        <h1 className={styles.h1}>Podcaster</h1>
        <p>IS LOADING? {loading}</p>
        <span className={loading ? styles.loading : styles.loaded}></span>
        <hr className={styles.hr} />
    </div>
  )
}

export default Header