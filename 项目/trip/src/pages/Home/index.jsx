import useTitle from "@/hooks/useTitle";
import styles from './home.module.css'
import HomeSwiper from "@/components/Home/Swiper";
import {Image} from 'react-vant'
import {
    Button
} from 'react-vant'
import { showToast } from "../../components/Toast/ToastController";
const Home = () => {
    useTitle('首页');
    return (
        <>
            <div className={styles.container}>
                {/* <HomeSwiper/> */}
                <Button onClick={() => showToast(1,2,3)}> showToast触发</Button>
                <h1 className="tt">Hello World</h1>
            </div>
        </>
    )
}

export default Home;