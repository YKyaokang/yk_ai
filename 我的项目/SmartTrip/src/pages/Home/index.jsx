import { useState, useEffect, useRef } from 'react'
import styles from './home.module.css'
import Header from '@/components/Home/Header'
import Adver from '@/components/Home/Adver'
import Swiper from '@/components/Home/Swiper'
import Recommand from '@/components/Home/Recommand'
import AnimatedSkeleton from '@/components/Home/Skeleton/AnimatedSkeleton'
import useTitle from '@/hooks/useTitle'

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
    const preloadedImagesRef = useRef(new Set())

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
            

            return () => clearTimeout(timer) 
        }

        startPreload()
    }, [])

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
        </div>
    )
}
export default Home