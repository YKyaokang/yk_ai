import React from 'react'
import styles from './index.module.css'

// 基础骨架屏组件
export const Skeleton = ({ 
  width = '100%', 
  height = '40px', 
  borderRadius = '8px',
  className = '' 
}) => {
  return (
    <div 
      className={`${styles.skeleton} ${className}`}
      style={{ width, height, borderRadius }}
    />
  )
}

// 卡片骨架屏
export const CardSkeleton = () => {
  return (
    <div className={styles.cardSkeleton}>
      <Skeleton height="300px" borderRadius="15px 15px 0 0" />
      <div className={styles.cardContent}>
        <Skeleton height="32px" width="80%" />
        <Skeleton height="24px" width="60%" />
        <div className={styles.cardFooter}>
          <Skeleton width="80px" height="60px" borderRadius="50%" />
          <div className={styles.cardInfo}>
            <Skeleton height="24px" width="120px" />
            <Skeleton height="20px" width="80px" />
          </div>
          <Skeleton height="20px" width="60px" />
        </div>
      </div>
    </div>
  )
}

// 列表项骨架屏
export const ListSkeleton = () => {
  return (
    <div className={styles.listSkeleton}>
      <Skeleton width="80px" height="80px" borderRadius="50%" />
      <div className={styles.listContent}>
        <Skeleton height="28px" width="70%" />
        <Skeleton height="24px" width="50%" />
      </div>
      <Skeleton height="20px" width="40px" />
    </div>
  )
}

// 首页骨架屏
export const HomeSkeleton = () => {
  return (
    <div className={styles.homeSkeleton}>
      {/* 头部骨架 */}
      <div className={styles.headerSkeleton}>
        <Skeleton width="120px" height="40px" />
        <div className={styles.headerActions}>
          <Skeleton width="40px" height="40px" borderRadius="50%" />
          <Skeleton width="40px" height="40px" borderRadius="50%" />
        </div>
      </div>
      
      {/* 搜索框骨架 */}
      <div className={styles.searchSkeleton}>
        <Skeleton height="80px" borderRadius="40px" />
      </div>
      
      {/* Banner骨架 */}
      <div className={styles.bannerSkeleton}>
        <Skeleton height="400px" borderRadius="20px" />
      </div>
      
      {/* 菜单骨架 */}
      <div className={styles.menuSkeleton}>
        {Array(8).fill(0).map((_, index) => (
          <div key={index} className={styles.menuItemSkeleton}>
            <Skeleton width="120px" height="120px" borderRadius="20px" />
            <Skeleton width="60px" height="24px" />
          </div>
        ))}
      </div>
    </div>
  )
}

// 攻略页骨架屏  
export const StrategySkeleton = () => {
  return (
    <div className={styles.strategySkeleton}>
      {Array(3).fill(0).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  )
}

export default Skeleton