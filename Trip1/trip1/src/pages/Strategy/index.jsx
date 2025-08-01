import React, { useState, useEffect } from 'react'
import { Tabs } from 'react-vant'
import styles from './index.module.css'

// 攻略页面组件
const Strategy = () => {
  const [activeTab, setActiveTab] = useState('recommend')
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  // 模拟数据
  const mockPosts = [
    {
      id: 1,
      title: '三亚完美5日游攻略，海景酒店+美食推荐',
      author: '旅行达人小李',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face',
      images: [
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1582623003834-1c491c8b8f1d?w=300&h=200&fit=crop'
      ],
      likes: 328,
      comments: 45,
      publishTime: '2天前',
      location: '三亚',
    },
    {
      id: 2,
      title: '北京故宫深度游，避开人群的最佳路线',
      author: '历史爱好者',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face',
      images: [
        'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=300&h=200&fit=crop'
      ],
      likes: 256,
      comments: 32,
      publishTime: '1周前',
      location: '北京',
    },
    {
      id: 3,
      title: '成都美食地图，本地人推荐的隐藏小店',
      author: '美食猎人',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=200&fit=crop'
      ],
      likes: 189,
      comments: 67,
      publishTime: '3天前',
      location: '成都',
    },
    {
      id: 4,
      title: '杭州西湖周边民宿推荐，性价比超高',
      author: '住宿专家',
      avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face',
      images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop'
      ],
      likes: 142,
      comments: 28,
      publishTime: '5天前',
      location: '杭州',
    }
  ]

  useEffect(() => {
    // 模拟加载数据
    setLoading(true)
    setTimeout(() => {
      setPosts(mockPosts)
      setLoading(false)
    }, 1000)
  }, [activeTab])

  // 瀑布流布局的帖子项
  const PostItem = ({ post }) => (
    <div className={styles.postItem}>
      {/* 图片区域 */}
      <div className={styles.imageGrid}>
        {post.images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`图片${index + 1}`}
            className={styles.postImage}
          />
        ))}
      </div>
      
      {/* 内容区域 */}
      <div className={styles.postContent}>
        <h3 className={styles.postTitle}>{post.title}</h3>
        
        {/* 作者信息 */}
        <div className={styles.authorInfo}>
          <img src={post.avatar} alt={post.author} className={styles.authorAvatar} />
          <div className={styles.authorDetails}>
            <span className={styles.authorName}>{post.author}</span>
            <span className={styles.postLocation}>📍 {post.location}</span>
          </div>
          <span className={styles.publishTime}>{post.publishTime}</span>
        </div>
        
        {/* 互动数据 */}
        <div className={styles.postStats}>
          <span className={styles.stat}>
            ❤️ {post.likes}
          </span>
          <span className={styles.stat}>
            💬 {post.comments}
          </span>
        </div>
      </div>
    </div>
  )

  return (
    <div className={styles.container}>
      {/* 顶部导航 */}
      <header className={styles.header}>
        <h1 className={styles.title}>攻略</h1>
        <div className={styles.headerActions}>
          <span className={styles.searchIcon}>🔍</span>
          <span className={styles.writeIcon}>✏️</span>
        </div>
      </header>

      {/* 标签页 */}
      <div className={styles.tabsContainer}>
        <Tabs active={activeTab} onChange={setActiveTab}>
          <Tabs.TabPane name="recommend" title="推荐" />
          <Tabs.TabPane name="follow" title="关注" />
          <Tabs.TabPane name="local" title="本地" />
        </Tabs>
      </div>

      {/* 内容区域 */}
      <div className={styles.content}>
        {loading ? (
          <div className={styles.loading}>
            <div className={styles.skeleton}></div>
            <div className={styles.skeleton}></div>
            <div className={styles.skeleton}></div>
          </div>
        ) : (
          <div className={styles.postsContainer}>
            {posts.map(post => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Strategy