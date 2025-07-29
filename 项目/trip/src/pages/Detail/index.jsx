import {
    useParams
} from 'react-router-dom'
import {
    Skeleton
} from 'react-vant'
import {
    useEffect
} from 'react'
import useDetailStore from '@/store/useDetailStore'
import useTitle from '@/hooks/useTitle'
import styles from './detail.module.css';
import {
    ArrowLeft,
    Cart
} from '@react-vant/icons'
import {
    Swiper,
    Image
} from 'react-vant';
import BottonBar from '@/components/Detail/BottomBar'
import DeliveryRow from '@/components/Detail/DeliveryRow'
const Detail = () => {
    const {id} = useParams();
    const { loading, detail, setDetail } = useDetailStore();
    // useTitle("我的")
    useEffect(() => {
        setDetail()
    }, [])
    useEffect(() => {
        useTitle(detail.title);
    }, [detail])
    if (loading) return <Skeleton />
    return (
        <>
            <nav className={styles.nav}>
                <ArrowLeft fontSize={36}/>
                <Cart fontSize={36}/>
            </nav>
            {/* 幻灯片 */}
            <div className={styles.container}>
                <Swiper>
                {
                    detail.images.map((item, index) => (
                        <Swiper.Item key={index}>
                            <Image  src={item.url}/>
                        </Swiper.Item>
                    ))
                }
                </Swiper>
            </div>
            <DeliveryRow />
            <BottonBar />
        </>
    )
}

export default Detail