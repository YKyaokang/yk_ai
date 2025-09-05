import { memo } from 'react'
import { Skeleton } from 'react-vant'
import styles from './animatedSkeleton.module.css'

const AnimatedSkeleton = () => {
    return (
        <div className={styles.container}>
        {/* 搜索栏骨架屏 */}
        <div className={styles.searchSection}>
            <div className={styles.searchBar}>
                <Skeleton title row={1} />
            </div>
        </div>
        
        {/* 网格图标骨架屏 */}
        <div className={styles.gridSection}>
            <div className={styles.gridContainer}>
                {Array.from({ length: 15 }).map((_, index) => (
                    <div key={index} className={styles.gridItem}>
                        <div className={styles.iconSkeleton}>
                            <Skeleton avatar size="80px" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        {/* 广告区域骨架屏 */}
        <div className={styles.adverSection}>
            <div className={styles.adverGrid}>
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className={styles.adverItem}>
                        <div className={styles.adverTitle}>
                            <Skeleton title row={1} />
                        </div>
                        <div className={styles.adverImage}>
                            <Skeleton image width="100%" height="80px" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        {/* 轮播图骨架屏 */}
        <div className={styles.swiperSection}>
            <div className={styles.swiperContainer}>
                <Skeleton image width="100%" height="200px" />
            </div>
        </div>
        
        {/* 推荐列表骨架屏 */}
        <div className={styles.recommandSection}>
            <div className={styles.recommandTitle}>
                <Skeleton image width="100%" height="60px" />
            </div>
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

export default memo(AnimatedSkeleton) 