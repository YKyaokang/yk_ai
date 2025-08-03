import { useState, useEffect } from "react";
import { useUserStore } from "@/store/useUserStore";
import { Wechat, Alipay } from "@react-vant/icons";
import styles from './login.module.css';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login,getUser} = useUserStore();
    useEffect(() => {
        const getUserInfo = async () => {
            const res = await getUser();
            if(res.code == 40003)
            {
                alert('用户未登录');
            }
            if(res.code == 200)
            {
                alert('用户已登录');
            }
        }
        getUserInfo();
    }, []);
    const inputChangeA = (e) => {
        if(e.target.value.length < 6)
        {
            console.log('用户名不能小于8位');
        }
        setUsername(e.target.value);
    }
    const inputChangeB = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);
        const res = await login({username,password})
        // 如果登录失败
        if(res == 40001)
        {
            alert('登录失败');
        }
        // 如果登录成功 
        if(res == 200)
        {
            alert('登录成功');
        }
    }
    
    return (
        <div>
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
            <div>
                <span>
                    
                </span>
            </div>
            </div>


            <div className={styles.footer}>
                <div className={styles.iconitem}>
                    <Wechat  />
                </div>
                <div className={styles.iconitem}>
                    <Alipay  />
                </div>
            </div>
        
        </div>
    )
}

export default Login;