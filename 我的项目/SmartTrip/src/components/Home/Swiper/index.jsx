import styles from './swiper.module.css'
import { Swiper, Image } from 'react-vant';
// 引入home-swiper目录中的7张图片
import Swiper1 from '@/assets/home-swiper/生成动漫风格轮播图.png'
import Swiper2 from '@/assets/home-swiper/生成动漫风格轮播图 (1).png'
import Swiper3 from '@/assets/home-swiper/生成动漫风格轮播图 (2).png'
import Swiper4 from '@/assets/home-swiper/生成动漫风格轮播图 (3).png'
import Swiper5 from '@/assets/home-swiper/生成动漫风格轮播图 (4).png'
import Swiper6 from '@/assets/home-swiper/生成动漫风格轮播图 (5).png'
import Swiper7 from '@/assets/home-swiper/生成动漫风格轮播图 (6).png'

// 定义轮播图数据
const swiperData = [
    { src: Swiper1, alt: 'swiper1', title: '精选推荐' },
    { src: Swiper2, alt: 'swiper2', title: '热门目的地' },
    { src: Swiper3, alt: 'swiper3', title: '特价优惠' },
    { src: Swiper4, alt: 'swiper4', title: '新品上线' },
    { src: Swiper5, alt: 'swiper5', title: '周末游' },
    { src: Swiper6, alt: 'swiper6', title: '亲子游' },
    { src: Swiper7, alt: 'swiper7', title: '自由行' }
]

const SwiperComponent = () => {
    return (
        <>
        <div className={styles.swiper_container}>
            <Swiper 
                autoplay={3000}
                loop={true}
                showIndicators={true}
                className={styles.custom_swiper}
            >
                {swiperData.map((item, index) => (
                    <Swiper.Item key={index}>
                        <div className={styles.swiper_item}>
                            <Image 
                                src={item.src} 
                                alt={item.alt}
                                width="100%"
                                height="200px"
                                fit="cover"
                                radius={10}
                            />
                        </div>
                    </Swiper.Item>
                ))}
            </Swiper>
        </div>
        </>
    )
}
export default SwiperComponent