import { useEffect, useRef } from 'react'
import styles from './suggest.module.css'
import ArticleCard from './imageCard'
import { useArticlesStore } from '@/store/useArticlesStore'
import 广告 from '@/assets/strategy/stragety广告.png'
const Suggest = () => {
    const { articles, loading, fetchArticles } = useArticlesStore()
    const loader = useRef(null)
    
    useEffect(() => {
        fetchArticles()
    }, [])

    useEffect(() => {
        // 监听加载更多的观察者
        const observer = new IntersectionObserver(([entry], obs) => {
            if (entry.isIntersecting && !loading) {
                fetchArticles()
            }
        })   
        if (loader.current) observer.observe(loader.current)
        return () => observer.disconnect()
    }, [loading, fetchArticles])

    return (
        <div className={styles.suggest_container}>
            <img src={广告} alt="广告" className={styles.advertising} />
            <div className={styles.waterfall_wrapper}>
                <div className={styles.column}>
                    {
                        articles.filter((_, i) => i % 2 === 0).map(
                            item => (
                                <ArticleCard 
                                    key={item.id} 
                                    image={item.image}
                                    location={item.location}
                                    description={item.description}
                                    avatar={item.avatar}
                                    nickname={item.nickname}
                                    like={item.like}
                                />
                            )
                        )
                    }
                </div>
                <div className={styles.column}>
                    {
                        articles.filter((_, i) => i % 2 !== 0).map(
                            item => (
                                <ArticleCard 
                                    key={item.id} 
                                    image={item.image}
                                    location={item.location}
                                    description={item.description}
                                    avatar={item.avatar}
                                    nickname={item.nickname}
                                    like={item.like}
                                />
                            )
                        )
                    }
                </div>
            </div>
            <div ref={loader} className={styles.loader}>
                {loading ? '加载中...' : ''}
            </div>
        </div>
    )
}

export default Suggest