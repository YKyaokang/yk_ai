import styles from './todopage.module.css'
import notfound from '@/assets/App/透明吉祥物.png'
const TodoPage = () => {
    return (
        <div>
        <div className={styles.Img}>
            <img src={notfound} alt="404" />
        </div>
        <h2>
            页面待开发
        </h2>
    </div>
    )
}
export default TodoPage
