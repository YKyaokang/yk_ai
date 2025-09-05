import { useEffect } from 'react'
import styles from './header.module.css'
import { Scan, SettingO, CommentO } from '@react-vant/icons'
import { useUserStore } from '@/store/useUserStore'
import logo from '@/assets/App/吉祥物.png'  
import bg from '@/assets/Account-header/个人主页背景.png'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const list = [
        {
            name:"旅游券",
            value: '8张',
        },
        {
            name:'优惠券',
            value: '10张',
        },
        {
            name:'抵扣券',
            value: '0张',
        },
        {
            name:'积分',
            value: '301分',
        }
    ]
    const navigate = useNavigate()
    const {user} = useUserStore()
    const logout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    useEffect(() => {
        console.log(user)
    }, [user])
    return (
        <div className={styles.header} style={{backgroundImage: `url(${bg})`}}>

            <div className={styles.iconList}>
                <Scan className={styles.icon} />
                &nbsp;
                <SettingO className={styles.icon} />
                &nbsp;
                <CommentO className={styles.icon} />
            </div>

            <div className={styles.userInfo}>
                    <div className={styles.avatar}>
                        <img src={logo} alt="智行云游" />
                    </div>
                    <span>{user.username}</span>
                    <div className={styles.logout} onClick={logout}>注销登录</div>
            </div>

            <div className={styles.adv}>
                {
                    list.map((item,index) => (
                        <div className={styles.adv_item} key={index}>
                            <span>{item.value}</span>
                            <span>{item.name}</span>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Header