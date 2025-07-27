import useTitle from "@/hooks/useTitle";
import styles from './home.module.css'
import HomeSwiper from "@/components/Home/Swiper";
import {Image} from 'react-vant'
const Home = () => {
    useTitle('首页');
    return (
        <>
            <div className={styles.container}>
                <HomeSwiper/>
            </div>
        </>
    )
}

export default Home;