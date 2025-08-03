import { useEffect, useRef } from 'react'
import styles from './like.module.css'
import ArticleCard from '@/components/Strategy/ArtcleCard'
import { useArticlesStore } from '@/store/useArticlesStore'
const Like = () => {
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
        <div className={styles.like_container}>
        <div className={styles.waterfall_wrapper}>
            <div className={styles.column}>
                {
                    articles.filter((_, i) => i % 2 === 0).map(
                        item => (
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
                        )
                    )
                }
            </div>
            <div className={styles.column}>
                {
                    articles.filter((_, i) => i % 2 !== 0).map(
                        item => (
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

export default Like 