import React, { Suspense } from 'react'
import { useUserStore } from '../../store'
import styles from './index.module.css'

// 首页组件
const Home = () => {
  const { userInfo } = useUserStore()

  return (
    <div className={styles.container}>
      {/* 顶部区域 */}
      <header className={styles.header}>
        <div className={styles.location}>
          <span className="icon icon-location icon-lg icon-white"></span>
          <span className={`${styles.locationText} text-lg font-medium`}>{userInfo.location}</span>
        </div>
        <div className={styles.headerRight}>
          <span className="icon icon-search icon-lg icon-white"></span>
          <span className="icon icon-phone icon-lg icon-white"></span>
        </div>
      </header>

      {/* 搜索栏 */}
      <div className={styles.searchSection}>
        <div className={styles.searchBar}>
          <span className="icon icon-search icon-md icon-primary"></span>
          <input 
            className={`${styles.searchInput} text-base`} 
            placeholder="搜索目的地、酒店、景点"
            readOnly
          />
        </div>
      </div>

      {/* Banner 图片 */}
      <div className={styles.bannerSection}>
        <div className={styles.banner}>
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
            alt="旅行Banner"
            className={styles.bannerImage}
          />
          <div className={styles.bannerOverlay}>
            <h2 className={styles.bannerTitle}>发现美好旅程</h2>
            <p className={styles.bannerSubtitle}>让旅行更简单</p>
          </div>
        </div>
      </div>

      {/* 功能菜单 */}
      <div className={styles.menuSection}>
        <div className={styles.menuGrid}>
          <div className={styles.menuItem}>
            <div className={styles.menuIcon}>✈️</div>
            <span className={styles.menuText}>机票</span>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.menuIcon}>🏨</div>
            <span className={styles.menuText}>酒店</span>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.menuIcon}>🚗</div>
            <span className={styles.menuText}>租车</span>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.menuIcon}>🎫</div>
            <span className={styles.menuText}>门票</span>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.menuIcon}>🏖️</div>
            <span className={styles.menuText}>度假</span>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.menuIcon}>🚄</div>
            <span className={styles.menuText}>火车票</span>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.menuIcon}>🚌</div>
            <span className={styles.menuText}>汽车票</span>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.menuIcon}>💰</div>
            <span className={styles.menuText}>特价</span>
          </div>
        </div>
      </div>

      {/* 推荐内容 */}
      <div className={styles.recommendSection}>
        <h3 className={styles.sectionTitle}>为你推荐</h3>
        <div className={styles.recommendList}>
          <div className={styles.recommendItem}>
            <img 
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop"
              alt="推荐1"
              className={styles.recommendImage}
            />
            <div className={styles.recommendInfo}>
              <h4 className={styles.recommendTitle}>三亚海滨度假</h4>
              <p className={styles.recommendPrice}>¥2999起</p>
            </div>
          </div>
          <div className={styles.recommendItem}>
            <img 
              src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=300&h=200&fit=crop"
              alt="推荐2"
              className={styles.recommendImage}
            />
            <div className={styles.recommendInfo}>
              <h4 className={styles.recommendTitle}>北京文化之旅</h4>
              <p className={styles.recommendPrice}>¥1599起</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home