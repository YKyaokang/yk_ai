import { useRef, useEffect, memo } from 'react'
import styles from './artcle.module.css'
import { LikeO, Location } from '@react-vant/icons'
import { useNavigate } from 'react-router-dom'

// 默认占位图
const DEFAULT_PLACEHOLDER = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjUgMEMxMS45IDAgMCAxMS45IDAgMjV2NTBDMCA4OC4xIDExLjkgMTAwIDI1IDEwMEg3NUM4OC4xIDEwMCAxMDAgODguMSAxMDAgNzVWMjVDMTAwIDExLjkgODguMSAwIDc1IDBINVUiIGZpbGw9IiMyMDIwMjAiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiLz48L3N2Zz4=';
// 加载失败占位图
const ERROR_PLACEHOLDER = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjUgMEMxMS45IDAgMCAxMS45IDAgMjV2NTBDMCA4OC4xIDExLjkgMTAwIDI1IDEwMEg3NUM4OC4xIDEwMCAxMDAgODguMSAxMDAgNzVWMjVDMTAwIDExLjkgODguMSAwIDc1IDBINVUiIGZpbGw9IiMyMDIwMjAiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiLz48L3N2Zz4=';

const ArticleCard = (props) => {
    const { id, image, location, description, avatar, nickname, like, placeholder = DEFAULT_PLACEHOLDER } = props
    const imgRef = useRef(null)
    const navigate = useNavigate()
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

    const handleClick = () => {
        navigate(`/article/${id}`)
    }

    return (
        <div className={styles.article_card} onClick={handleClick}>
            {/* 地点图片 */}
            <div className={styles.image_container}>
                <img 
                    ref={imgRef} 
                    src={placeholder} 
                    data-src={image} 
                    className={`${styles.img} loading`} 
                    alt={location}
                />
                {/* 地点名称覆盖在图片上 */}
                {location && location.length > 0 && (
                    <h3 className={styles.location}><Location  />&nbsp;{location}</h3>
                )}
            </div>
            
            {/* 卡片内容 */}
            <div className={styles.card_content}>
                {/* 描述内容 */}
                <p className={styles.description}>{description}</p>
                
                {/* 底部用户信息和点赞 */}
                <div className={styles.card_footer}>
                    <div className={styles.user_info}>
                        <img 
                            src={avatar} 
                            alt={nickname} 
                            className={styles.avatar}
                        />
                        <span className={styles.nickname}>{nickname}</span>
                    </div>
                    <div className={styles.like_section}>
                        <LikeO size={20} />
                        <span className={styles.like_count}>{like}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ArticleCard)