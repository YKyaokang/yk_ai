import { useEffect } from 'react'
import styles from './suggest.module.css'
import ArticleCard from '@/components/Strategy/ArtcleCard'
import { useArticlesStore } from '@/store/useArticlesStore'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import { useWaterfallLayout } from '@/hooks/useWaterfallLayout'
import 广告 from '@/assets/strategy/stragety广告.png'   
import useTitle from '@/hooks/useTitle'
const Suggest = () => {
    useTitle("推荐")
    // 从文章 store 中获取数据和方法
    const { articles, loading, fetchArticles } = useArticlesStore()
    
    // 使用无限滚动 Hook：传入加载函数和加载状态，返回用于触发的 loader ref
    const { loader } = useInfiniteScroll(fetchArticles, loading)
    
    // 使用瀑布流布局 Hook：传入文章数组，返回分成两列的数据
    const { leftColumn, rightColumn } = useWaterfallLayout(articles)
    
    // 组件初始化时获取第一页数据
    useEffect(() => {
        fetchArticles()
    }, [])

    return (
        <div className={styles.suggest_container}>
            {/* 推荐页面顶部广告图片 */}
            <img src={广告} alt="广告" className={styles.advertising} />
            
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
        </div>
    )
}

export default Suggest