import {
    ArrowLeft
} from '@react-vant/icons'
import { useNavigate } from 'react-router-dom'
import styles from './header.module.css'
const Header = () => {
    const navigate = useNavigate()
    
    const handleGoBack = () => {
        navigate(-1) // 返回上一页
    }
    
    return (
        <header className={styles.header}>
            <ArrowLeft onClick={handleGoBack} style={{fontSize: '20px', cursor: 'pointer'}}/>
            <h1 className={styles.title}>智行客服</h1>
            <div className={styles.headerActions}>
                <span className={styles.phoneIcon}>
                    <svg>
                        <use xlinkHref='#icon-dianhua'></use>
                    </svg>
                </span>
            </div>
        </header>
    )
}
export default Header;