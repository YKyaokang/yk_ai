import styles from './imageCard.module.css'
import {
    useRef,
    useEffect
} from 'react'

// 默认占位图 (灰色背景的base64图片)
const DEFAULT_PLACEHOLDER = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjUgMEMxMS45IDAgMCAxMS45IDAgMjV2NTBDMCA4OC4xIDExLjkgMTAwIDI1IDEwMEg3NUM4OC4xIDEwMCAxMDAgODguMSAxMDAgNzVWMjVDMTAwIDExLjkgODguMSAwIDc1IDBINVUiIGZpbGw9IiMyMDIwMjAiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiLz48L3N2Zz4=';
// 加载失败占位图
const ERROR_PLACEHOLDER = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMjUgMEMxMS45IDAgMCAxMS45IDAgMjV2NTBDMCA4OC4xIDExLjkgMTAwIDI1IDEwMEg3NUM4OC4xIDEwMCAxMDAgODguMSAxMDAgNzVWMjVDMTAwIDExLjkgODguMSAwIDc1IDBINVUiIGZpbGw9IiMyMDIwMjAiLz48cGF0aCBkPSJNNTAgMzBDMzguOSAzMCAzMCAzOC45IDMwIDUwdjIwYzAgMTEuMSA4LjkgMjAgMjAgMjBIMTc1Yy42IDAgMS0uNCAxLTFWNTBjMC0xMS4xLTguOS0yMC0yMC0yMHpNNTAgODBDMzguOSA4MCAzMCA3MS4xIDMwIDYwVjUwYzAgLTExLjEgOC45LTIwIDIwLTIwaDUwYzExLjEgMCAyMCA4LjkgMjAgMjB2MTBjMCAxMS4xLTguOSAyMC0yMCAyMHoiIGZpbGw9IiNmZmYiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiLz48L3N2Zz4=';

const ImageCard = (props) => {
    const { url, height, placeholder = DEFAULT_PLACEHOLDER } = props
    const imgRef = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(([entry], obs) => {
            if (entry.isIntersecting) {
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
                    img.src = ERROR_PLACEHOLDER
                }
                obs.unobserve(entry.target)
            }

        })
        if (imgRef.current) observer.observe(imgRef.current)
    }, [])
    return (
        <div style={{ height }} className={styles.card}>
            <img 
                ref={imgRef} 
                src={placeholder} 
                data-src={url} 
                className={`${styles.img} loading`} 
                alt="图片加载中..."
            />
        </div>
    )
}
export default ImageCard