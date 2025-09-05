import { memo } from 'react'
import { Skeleton } from 'react-vant'
import styles from './skeleton.module.css'

const StrategySkeleton = () => {
    return (
        <div className={styles.container}>
           
            <div className={styles.recommandSection}>
                <div className={styles.cardGrid}>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className={styles.cardItem}>
                            <div className={styles.cardImage}>
                                <Skeleton image width="100%" height="180px" />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle}>
                                    <Skeleton title row={2} />
                                </div>
                                <div className={styles.cardLocation}>
                                    <Skeleton title row={1} />
                                </div>
                                <div className={styles.cardFooter}>
                                    <div className={styles.cardPrice}>
                                        <Skeleton title row={1} />
                                    </div>
                                    <div className={styles.cardStats}>
                                        <Skeleton title row={1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default memo(StrategySkeleton) 