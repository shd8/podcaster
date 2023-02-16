import React, { ChangeEventHandler} from 'react'
import styles from '@/styles/SearchCount.module.scss'

export type SearchCountProps = {
    onChange: ChangeEventHandler<HTMLInputElement>
    length: number
}

const SearchCount = ({ onChange, length }: SearchCountProps) => {
  return (
    <div className={styles.container} >
        <span data-testid='counter'>{length}</span>
        <input 
            placeholder='Filter podcasts...' 
            defaultValue={''} 
            type="text" 
            name="search" 
            onChange={onChange} 
        />
    </div>
  )
}

export default SearchCount