import styles from './home.module.css'
import Header from '@/components/Home/Header'
import Adver from '@/components/Home/Adver'
import Swiper from '@/components/Home/Swiper'
import Recommand from '@/components/Home/Recommand'
import useTitle from '@/hooks/useTitle'
const Home = () => {
    useTitle("首页")
    return (
        <div>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.adver}>
                <Adver />
            </div>
            <div className={styles.swiper}>
                <Swiper />
            </div>
            <div className={styles.recommand}>
                <Recommand />
            </div>
        </div>
    )
}
export default Home