import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './index.module.css'

const TabBar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const tabs = [
    {
      key: '/',
      title: '首页',
      icon: '🏠',
      activeIcon: '🏠'
    },
    {
      key: '/strategy',
      title: '攻略',
      icon: '📖',
      activeIcon: '📖'
    },
    {
      key: '/service',
      title: '客服',
      icon: '💬',
      activeIcon: '💬'
    },
    {
      key: '/profile',
      title: '我的',
      icon: '👤',
      activeIcon: '👤'
    }
  ]

  const handleTabClick = (tab) => {
    navigate(tab.key)
  }

  return (
    <div className={styles.tabBar}>
      {tabs.map(tab => {
        const isActive = location.pathname === tab.key
        return (
          <div
            key={tab.key}
            className={`${styles.tabItem} ${isActive ? styles.active : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            <div className={styles.tabIcon}>
              {isActive ? tab.activeIcon : tab.icon}
            </div>
            <span className={styles.tabText}>{tab.title}</span>
          </div>
        )
      })}
    </div>
  )
}

export default TabBar