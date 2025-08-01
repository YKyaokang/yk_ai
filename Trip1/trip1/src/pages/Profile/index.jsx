import React from 'react'
import { useUserStore } from '../../store'
import styles from './index.module.css'

const Profile = () => {
  const { userInfo, isLogin } = useUserStore()

  // 菜单项数据
  const menuItems = [
    {
      icon: '📋',
      title: '我的订单',
      subtitle: '查看全部订单',
      badge: '3',
      path: '/orders'
    },
    {
      icon: '✈️',
      title: '我的行程',
      subtitle: '查看出行计划',
      path: '/trips'
    },
    {
      icon: '💰',
      title: '优惠券',
      subtitle: '5张可用',
      badge: '5',
      path: '/coupons'
    },
    {
      icon: '🎁',
      title: '积分商城',
      subtitle: '1250积分可用',
      path: '/points'
    }
  ]

  const serviceItems = [
    {
      icon: '🛠️',
      title: '定制旅行',
      subtitle: '专业顾问为您定制',
      path: '/custom'
    },
    {
      icon: '📞',
      title: '在线客服',
      subtitle: '24小时服务',
      path: '/service'
    },
    {
      icon: '❓',
      title: '帮助中心',
      subtitle: '常见问题解答',
      path: '/help'
    },
    {
      icon: '⚙️',
      title: '设置',
      subtitle: '账户与安全',
      path: '/settings'
    }
  ]

  return (
    <div className={styles.container}>
      {/* 顶部用户信息 */}
      <header className={styles.header}>
        <div className={styles.userCard}>
          {isLogin ? (
            <>
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face"
                alt="用户头像"
                className={styles.avatar}
              />
              <div className={styles.userInfo}>
                <h2 className={styles.username}>旅行爱好者</h2>
                <p className={styles.userLevel}>🌟 黄金会员</p>
                <div className={styles.userStats}>
                  <span className={styles.stat}>
                    <span className={styles.statNumber}>12</span>
                    <span className={styles.statLabel}>足迹</span>
                  </span>
                  <span className={styles.stat}>
                    <span className={styles.statNumber}>1250</span>
                    <span className={styles.statLabel}>积分</span>
                  </span>
                  <span className={styles.stat}>
                    <span className={styles.statNumber}>89</span>
                    <span className={styles.statLabel}>关注</span>
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className={styles.loginPrompt}>
              <div className={styles.loginAvatar}>👤</div>
              <div className={styles.loginInfo}>
                <h2 className={styles.loginTitle}>登录/注册</h2>
                <p className={styles.loginSubtitle}>登录后享受更多优惠</p>
              </div>
            </div>
          )}
          
          {/* 右上角功能 */}
          <div className={styles.headerActions}>
            <span className={styles.messageIcon}>💬</span>
            <span className={styles.qrIcon}>📱</span>
          </div>
        </div>
      </header>

      {/* 快捷功能 */}
      <div className={styles.quickActions}>
        <div className={styles.actionItem}>
          <span className={styles.actionIcon}>🏨</span>
          <span className={styles.actionText}>酒店</span>
        </div>
        <div className={styles.actionItem}>
          <span className={styles.actionIcon}>✈️</span>
          <span className={styles.actionText}>机票</span>
        </div>
        <div className={styles.actionItem}>
          <span className={styles.actionIcon}>🚗</span>
          <span className={styles.actionText}>租车</span>
        </div>
        <div className={styles.actionItem}>
          <span className={styles.actionIcon}>🎫</span>
          <span className={styles.actionText}>门票</span>
        </div>
      </div>

      {/* 主要功能菜单 */}
      <div className={styles.menuSection}>
        <div className={styles.menuGroup}>
          {menuItems.map((item, index) => (
            <div key={index} className={styles.menuItem}>
              <div className={styles.menuIcon}>{item.icon}</div>
              <div className={styles.menuContent}>
                <h4 className={styles.menuTitle}>{item.title}</h4>
                <p className={styles.menuSubtitle}>{item.subtitle}</p>
              </div>
              {item.badge && (
                <span className={styles.badge}>{item.badge}</span>
              )}
              <span className={styles.arrow}>›</span>
            </div>
          ))}
        </div>
      </div>

      {/* 服务菜单 */}
      <div className={styles.serviceSection}>
        <div className={styles.menuGroup}>
          {serviceItems.map((item, index) => (
            <div key={index} className={styles.menuItem}>
              <div className={styles.menuIcon}>{item.icon}</div>
              <div className={styles.menuContent}>
                <h4 className={styles.menuTitle}>{item.title}</h4>
                <p className={styles.menuSubtitle}>{item.subtitle}</p>
              </div>
              <span className={styles.arrow}>›</span>
            </div>
          ))}
        </div>
      </div>

      {/* 扫码功能 */}
      <div className={styles.qrSection}>
        <div className={styles.qrCard}>
          <div className={styles.qrIcon}>📱</div>
          <div className={styles.qrInfo}>
            <h3 className={styles.qrTitle}>扫一扫</h3>
            <p className={styles.qrSubtitle}>扫码支付，出行更便捷</p>
          </div>
          <button className={styles.qrBtn}>立即体验</button>
        </div>
      </div>
    </div>
  )
}

export default Profile