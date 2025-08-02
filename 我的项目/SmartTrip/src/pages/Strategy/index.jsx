import { useState, useEffect } from 'react'
import styles from './strategy.module.css'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Strategy = () => {
    const location = useLocation()
    const navigate = useNavigate()
    
    const tabs = [
        {
            id: 0,
            name: '推荐',
            value: 'suggest',
            path: '/strategy/suggest'
        },
        {
            id: 1,
            name: '关注',   
            value: 'like',
            path: '/strategy/like'
        },
    ]
    
    // 根据当前路径确定活跃的tab
    const getActiveTab = () => {
        const currentPath = location.pathname
        if (currentPath === '/strategy' || currentPath.includes('/suggest')) {
            return 0 // 推荐
        } else if (currentPath.includes('/like')) {
            return 1 // 关注
        }
        return 0 // 默认推荐
    }
    
    const [activeTab, setActiveTab] = useState(getActiveTab())
    
    // 监听路由变化，更新活跃tab
    useEffect(() => {
        setActiveTab(getActiveTab())
    }, [location.pathname])
    
    // 处理tab切换
    const handleTabChange = (index) => {
        setActiveTab(index)
        const targetTab = tabs[index]
        navigate(targetTab.path)
    }
    
    return (
        <div className={styles.strategyContainer}>
            {/* 自定义Tab导航 */}
            <div className={styles.tabNavigation}>
                {tabs.map((tab, index) => (
                    <div 
                        key={tab.id}
                        className={`${styles.tabItem} ${activeTab === index ? styles.active : ''}`}
                        onClick={() => handleTabChange(index)}
                    >
                        {tab.name}
                    </div>
                ))}
            </div>
            
            {/* 内容区域 */}
            <div className={styles.tabContent}>
                <Outlet />
            </div>
        </div>
    )
}
export default Strategy