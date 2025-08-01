import { useRef, useEffect } from 'react'
import styles from './imageCard.module.css'
import { FireO, ChatO, LikeO } from '@react-vant/icons'
// 默认占位图 (灰色背景的base64图片)
const DEFAULT_PLACEHOLDER = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjUgMEMxMS45IDAgMCAxMS45IDAgMjV2NTBDMCA4OC4xIDExLjkgMTAwIDI1IDEwMEg3NUM4OC4xIDEwMCAxMDAgODguMSAxMDAgNzVWMjVDMTAwIDExLjkgODguMSAwIDc1IDBINVUiIGZpbGw9IiMyMDIwMjAiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiLz48L3N2Zz4=';
// 加载失败占位图
const ERROR_PLACEHOLDER = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjUgMEMxMS45IDAgMCAxMS45IDAgMjV2NTBDMCA4OC4xIDExLjkgMTAwIDI1IDEwMEg3NUM4OC4xIDEwMCAxMDAgODguMSAxMDAgNzVWMjVDMTAwIDExLjkgODguMSAwIDc1IDBINVUiIGZpbGw9IiMyMDIwMjAiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiLz48L3N2Zz4=';

const ImageCard = (props) => {
    const { image, title, location, price, comments, score, like, placeholder = DEFAULT_PLACEHOLDER } = props
    const imgRef = useRef(null)
    
    useEffect(() => {
        const observer = new IntersectionObserver(([entry], obs) => {
            if (entry.isIntersecting) {
                // 实现懒加载
                const img = entry.target
                const oImg = document.createElement('img')
                oImg.src = img.dataset.src
                oImg.onload = () => {
                    img.src = img.dataset.src
                    // 移除加载状态类
                    img.classList.remove('loading')
                }
                // 添加加载失败处理
                oImg.onerror = () => {
                    console.error('图片加载失败:', img.dataset.src)
                    img.src = ERROR_PLACEHOLDER
                }
                obs.unobserve(entry.target)
            }
        })
        if (imgRef.current) observer.observe(imgRef.current)
    }, [])

    return (
        <div className={styles.image_card}>
            <div className={styles.image_container}>
                <img 
                    ref={imgRef} 
                    src={placeholder} 
                    data-src={image} 
                    className={`${styles.img} loading`} 
                    alt={title}
                />
            </div>
            <div className={styles.card_content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.location}>{location}</p>
                <div className={styles.card_footer}>
                    <div className={styles.price_section}>
                        <span className={styles.price}>
                            {price === 0 ? '免费' : `¥${price}`}
                        </span>
                    </div>
                    <div className={styles.stats}>
                        <span className={styles.score}> <FireO  />{score}</span>
                        <span className={styles.comments}><ChatO  /> {comments}</span>
                        <span className={styles.like}><LikeO  />{like}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ImageCard