import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from './login.module.css';
import { useUserStore } from "@/store/useUserStore";
import AppIcons from '@/assets/App/图标.png'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const {login} = useUserStore();
    const navigate = useNavigate();
    const location = useLocation();
    const inputChangeA = (e) => {
        setUsername(e.target.value);
    }
    const inputChangeB = (e) => {
        setPassword(e.target.value);
    }
    
    const closeModal = () => {
        setShowModal(false);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);
        const res = await login({username,password})
        // 如果登录失败
        if(res == 40001)
        {
            setShowModal(true);
        }
        // 如果登录成功 
        if(res == 200)
        {
            // 获取来源页面路径，如果没有则默认跳转到首页
            const from = location.state?.from?.pathname || '/home';
            navigate(from, { replace: true });
        }
    }
    
    return (
        <div className={styles.body}>
            <div className={styles.header}>

                <div className={styles.img}>
                    <img src={AppIcons} alt="AppIcons" />
                </div>

                <div className={styles.title}>
                    登&nbsp;录
                </div>

            </div>
            
            <div className={styles.loginContainer}>
            <div className={styles.inputContainer}>
                <form>
                <input type="text" placeholder="用户名" value={username} className={styles.input} onChange={inputChangeA} />
                <input type="password" placeholder="密码" value={password} className={styles.input} onChange={inputChangeB} />
                <button type="submit" onClick={handleSubmit} className={styles.loginButton}>登录</button>
                </form>  
            </div>
            
            <div className={styles.selectContainer}>
                <span>验证码登录</span>
                <span>忘记密码</span>
            </div>
            </div>

            {/* 简单模态框 */}
            <div className={`${styles.modal} ${showModal ? styles.modalShow : styles.modalHide}`} onClick={closeModal}>
                <div className={styles.modalBox}>
                    账号或密码不正确
                </div>
            </div>
        </div>
    )
}

export default Login;