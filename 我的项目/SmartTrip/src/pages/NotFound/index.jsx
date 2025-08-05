import styles from './notfound.module.css'
import notfound from '@/assets/App/透明吉祥物.png'
const NotFound = () => {
    return (
        <div>
            <div className={styles.Img}>
                <img src={notfound} alt="404" />
            </div>
            <h2 onClick={onClick}>
                页面未找到
            </h2>
        </div>
    )
}

export default NotFound;