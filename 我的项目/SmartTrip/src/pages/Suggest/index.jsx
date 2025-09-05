import { useEffect, useState, useRef } from 'react'
import styles from './suggest.module.css'
import ArticleCard from '@/components/Strategy/ArtcleCard'
import { useArticlesStore } from '@/store/useArticlesStore'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import { useWaterfallLayout } from '@/hooks/useWaterfallLayout'
import StrategySkeleton from '@/components/Strategy/Skeleton'
import 广告 from '@/assets/strategy/stragety广告.png'   
import useTitle from '@/hooks/useTitle'

const Suggest = () => {
    useTitle("推荐")
    
    // 从文章 store 中获取数据和方法
    const { articles, loading, fetchArticles } = useArticlesStore()
    
    // 骨架屏显示状态
    const [showSkeleton, setShowSkeleton] = useState(true)
    
    // 初始加载完成标记
    const [initialLoaded, setInitialLoaded] = useState(false)
    
    // 用于跟踪预加载状态
    const preloadedImagesRef = useRef(new Set())
    
    // 使用无限滚动 Hook：传入加载函数和加载状态，返回用于触发的 loader ref
    const { loader } = useInfiniteScroll(fetchArticles, loading)
    
    // 使用瀑布流布局 Hook：传入文章数组，返回分成两列的数据
    const { leftColumn, rightColumn } = useWaterfallLayout(articles)
    
    // 预加载初始可见区域的图片
    const preloadInitialImages = async (articles) => {
        if (!articles || articles.length === 0) return
        
        // 只预加载前6张图片（初始可见区域）
        const initialArticles = articles.slice(0, 6)
        
        console.log("initialArticles", initialArticles)
        
        const preloadPromises = initialArticles.map(article => {
            return new Promise((resolve) => {
                if (preloadedImagesRef.current.has(article.image)) {
                    resolve()
                    return
                }
                
                const img = new Image()
                img.onload = () => {
                    preloadedImagesRef.current.add(article.image)
                    console.log("preloadedImagesRef", preloadedImagesRef.current)
                    resolve()
                }
                img.onerror = () => {
                    // 即使失败也resolve，不阻塞其他图片
                    resolve()
                }
                img.src = article.image
            })
        })
        
        try {
            await Promise.all(preloadPromises)
            console.log('初始图片预加载完成')
            setShowSkeleton(false)
        } catch (error) {
            console.error('图片预加载失败:', error)
            // 即使失败也隐藏骨架屏，避免永远显示
            setShowSkeleton(false)
        }
    }
    
    // 组件初始化时获取第一页数据
    useEffect(() => {
        fetchArticles()
    }, [])
    
    // 监听articles变化，进行预加载
    useEffect(() => {
        if (articles.length > 0 && !initialLoaded && !loading) {
            setInitialLoaded(true)
            preloadInitialImages(articles)
        }
    }, [articles, loading, initialLoaded])

    return (
        <div className={styles.suggest_container}>
            {/* 推荐页面顶部广告图片 */}
            <img src={广告} alt="广告" className={styles.advertising} />
            
            {/* 条件渲染：显示骨架屏或实际内容 */}
            {showSkeleton ? (
                // 骨架屏内容
                <div className={styles.skeleton_container}>
                    <StrategySkeleton />
                </div>
            ) : (
                // 实际内容
                <>
                    {/* 瀑布流容器：两列布局 */}
                    <div className={styles.waterfall_wrapper}>
                        {/* 左列：显示偶数索引的文章 */}
                        <div className={styles.column}>
                            {
                                leftColumn.map(item => (
                                    <ArticleCard 
                                        id={item.id}
                                        key={item.id} 
                                        image={item.image}
                                        location={item.location}
                                        description={item.description}
                                        avatar={item.avatar}
                                        nickname={item.nickname}
                                        like={item.like}
                                    />
                                ))
                            }
                        </div>
                        {/* 右列：显示奇数索引的文章 */}
                        <div className={styles.column}>
                            {
                                rightColumn.map(item => (
                                    <ArticleCard 
                                        id={item.id}
                                        key={item.id} 
                                        image={item.image}
                                        location={item.location}
                                        description={item.description}
                                        avatar={item.avatar}
                                        nickname={item.nickname}
                                        like={item.like}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    {/* 加载触发器：当这个元素进入视口时，会自动触发加载更多 */}
                    <div ref={loader} className={styles.loader}>
                        {loading ? '加载中...' : ''}
                    </div>
                </>
            )}
        </div>
    )
}

export default Suggest