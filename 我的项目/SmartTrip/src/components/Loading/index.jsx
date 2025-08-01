import styles from './loading.module.css'
import {memo} from 'react'
const Loading = () => {
    return (
        <div className={styles.wrapper}>
            加载中哈哈
        </div>
    )
}

export default memo(Loading)