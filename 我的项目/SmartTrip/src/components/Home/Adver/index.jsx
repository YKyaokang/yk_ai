import {memo} from 'react'
import styles from './adver.module.css'

// 引入home-adver目录中的4张图片
import Adver1 from '@/assets/home-adver/生成广告图.png'
import Adver2 from '@/assets/home-adver/生成广告图 (1).png'
import Adver3 from '@/assets/home-adver/生成广告图 (2).png'
import Adver4 from '@/assets/home-adver/生成广告图 (3).png'

const Adver = () => {
    return (
        <>
        <div className={styles.adver_container}>
            <div className={styles.adver_item}>
                <h4>牛人专线</h4>
                <a href="#">
                <img src={Adver1} alt="adver1" />
                </a>
            </div>

            <div className={styles.adver_item}>
                <h4>精选榜单</h4>
                <a href="#">
                <img src={Adver2} alt="adver2" />
                </a>
            </div>

            <div className={styles.adver_item}>
                <h4>爆款直播</h4>
                <a href="#">
                <img src={Adver3} alt="adver3" />
                </a>
            </div>

            <div className={styles.adver_item}>
                <h4>热门推荐</h4>
                <a href="#">
                <img src={Adver4} alt="adver4" />
                </a>

            </div>
        </div>
        </>
    )
}
export default memo(Adver)