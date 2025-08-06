import styles from './todopage.module.css'
import notfound from '@/assets/App/透明吉祥物.png'
import { useNavigate } from 'react-router-dom'
const TodoPage = ({title}) => {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/')
    }
    return (
        <div onClick={onClick}>
            <div className={styles.Img}>
                <img src={notfound} alt="404" />
            </div>
            <h2>
                {title}
            </h2>
            <h3>点击任意处返回</h3>
        </div>
    )
}

export default TodoPage;