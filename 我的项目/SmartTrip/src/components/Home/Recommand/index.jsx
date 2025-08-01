import { useEffect, useRef } from 'react'
import styles from './recommand.module.css'
import ImageCard from './imageCard'
import { useRecommandStore } from '@/store/useRecommandStore'
import RecommandAdv from '@/assets/home-adver/生成横幅.png'

const Recommand = () => {
    const { recommands, loading, fetchRecommands } = useRecommandStore()
    const loader = useRef(null)
    
    useEffect(() => {
        fetchRecommands()
    }, [])

    useEffect(() => {
        // 监听加载更多的观察者
        const observer = new IntersectionObserver(([entry], obs) => {
            if (entry.isIntersecting && !loading) {
                fetchRecommands()
                console.log(recommands)
            }
        })   
        if (loader.current) observer.observe(loader.current)
        return () => observer.disconnect()
    }, [loading, fetchRecommands])

    return (
        <div className={styles.recommand_container}>
            <div className={styles.title}>
                <img src={RecommandAdv} alt="RecommandAdv" className={styles.recommand_adv} />
            </div>
            <div className={styles.waterfall_wrapper}>
                <div className={styles.column}> 
                    {
                        recommands.filter((_, i) => i % 2 === 0).map(
                            item => (
                                <ImageCard 
                                    key={item.id} 
                                    image={item.image}
                                    title={item.title}
                                    location={item.location}
                                    price={item.price}
                                    comments={item.comments}
                                    score={item.score}
                                    like={item.like}
                                />
                            )
                        )
                    }
                </div>
                <div className={styles.column}>
                    {
                        recommands.filter((_, i) => i % 2 !== 0).map(
                            item => (
                                <ImageCard 
                                    key={item.id} 
                                    image={item.image}
                                    title={item.title}
                                    location={item.location}
                                    price={item.price}
                                    comments={item.comments}
                                    score={item.score}
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
export default Recommand;