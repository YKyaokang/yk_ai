import { useState, useEffect, useRef } from 'react'
import styles from './home.module.css'
import Header from '@/components/Home/Header'
import Adver from '@/components/Home/Adver'
import Swiper from '@/components/Home/Swiper'
import Recommand from '@/components/Home/Recommand'
import AnimatedSkeleton from '@/components/Home/Skeleton/AnimatedSkeleton'
import WelcomeModal from '@/components/Home/WelcomeModal'
import useTitle from '@/hooks/useTitle'
import { useUserStore } from '@/store/useUserStore'

// 导入所有需要预加载的图片资源
// Adver 组件图片
import Adver1 from '@/assets/home-adver/生成广告图.png'
import Adver2 from '@/assets/home-adver/生成广告图 (1).png'
import Adver3 from '@/assets/home-adver/生成广告图 (2).png'
import Adver4 from '@/assets/home-adver/生成广告图 (3).png'
import RecommandAdv from '@/assets/home-adver/生成横幅.png'

// Swiper 组件图片
import Swiper1 from '@/assets/home-swiper/生成动漫风格轮播图.png'
import Swiper2 from '@/assets/home-swiper/生成动漫风格轮播图 (1).png'
import Swiper3 from '@/assets/home-swiper/生成动漫风格轮播图 (2).png'

// Recommand 组件图片
import 南昌之星 from '@/assets/home-travel/南昌之星.png'
import 南昌梅岭 from '@/assets/home-travel/南昌梅岭.png'

const Home = () => {
    useTitle("首页")
    const [loading, setLoading] = useState(true)
    const [showWelcomeModal, setShowWelcomeModal] = useState(false)
    const preloadedImagesRef = useRef(new Set())
    
    // 获取用户登录状态
    const { isLogin } = useUserStore()

    // 定义需要预加载的所有图片
    const imagesToPreload = [
        // Adver 图片
        Adver1, Adver2, Adver3, Adver4, RecommandAdv,
        // Swiper 图片
        Swiper1, Swiper2, Swiper3,
        // Recommand 图片
        南昌之星, 南昌梅岭
    ]

    // 预加载图片函数
    const preloadImages = async (images) => {
        console.log('开始预加载Home页面图片，共', images.length, '张')
        
        const preloadPromises = images.map((imageSrc, index) => {
            return new Promise((resolve) => {
                if (preloadedImagesRef.current.has(imageSrc)) {
                    resolve()
                    return
                }
                
                const img = new Image()
                img.onload = () => {
                    preloadedImagesRef.current.add(imageSrc)
                    console.log(`图片 ${index + 1}/${images.length} 预加载完成:`, imageSrc)
                    resolve()
                }
                img.onerror = () => {
                    console.warn(`图片 ${index + 1}/${images.length} 预加载失败:`, imageSrc)
                    resolve() // 即使失败也完成，不阻塞其他图片
                }
                img.src = imageSrc
            })
        })
        
        try {
            await Promise.all(preloadPromises)
            console.log('Home页面所有图片预加载完成!')
        } catch (error) {
            console.error('图片预加载过程中出现错误:', error)
        }
    }

    useEffect(() => {
        // 启动预加载和骨架屏计时器
        const startPreload = async () => {
            // 立即开始预加载图片
            await preloadImages(imagesToPreload)
        
            setLoading(false)
            
            // 检查用户是否已经看过欢迎模态框（按会话存储，关闭浏览器后重置）
            const hasSeenWelcomeModal = sessionStorage.getItem('hasSeenWelcomeModal')
            
            // 骨架屏加载完成后，如果用户未登录且未看过模态框才显示欢迎模态框
            if (!isLogin && !hasSeenWelcomeModal) {
                setTimeout(() => {
                    setShowWelcomeModal(true)
                }, 500) // 延迟500ms让页面内容先渲染
            }
        }

        startPreload()
    }, [isLogin])

    // 关闭欢迎模态框的处理函数
    const handleCloseWelcomeModal = () => {
        setShowWelcomeModal(false)
        // 标记用户已经看过欢迎模态框（使用sessionStorage，关闭浏览器后重置）
        sessionStorage.setItem('hasSeenWelcomeModal', 'true')
    }

    return (
        <div>
            {loading && <AnimatedSkeleton />}
            {!loading && (
                <>
                    <div className={styles.header}>
                        <Header />
                    </div>
                    <div className={styles.adver}>
                        <Adver />
                    </div>
                    <div className={styles.swiper}>
                        <Swiper />
                    </div>
                    <div className={styles.recommand}>
                        <Recommand />
                    </div>
                </>
            )}
            
            {/* 欢迎模态框 - 仅在用户未登录时显示 */}
            {!isLogin && (
                <WelcomeModal 
                    isVisible={showWelcomeModal} 
                    onClose={handleCloseWelcomeModal} 
                />
            )}
        </div>
    )
}
export default Home